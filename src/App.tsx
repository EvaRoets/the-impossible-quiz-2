import React, {useState} from 'react';
import {fetchQuizQuestions} from "./API";
import QuestionCard from "./components/QuestionCard";
import {QuestionState} from "./API";

export type AnswerObject = {
    question: string;
    answer: string;
    correct: boolean;
    correctAnswer: string;
}

const App: React.FC = () => {
    const [loading, setLoading] = useState(false);
    const [questions, setQuestions] = useState<QuestionState[]>([]);
    const [number, setNumber] = useState(0);
    const [playerAnswers, setPlayerAnswers] = useState<AnswerObject[]>([]);
    const [score, setScore] = useState(0);
    const [gameOver, setGameOver] = useState(true);

    const startQuiz = async () => {
        setLoading(true);
        setGameOver(false);
        const newQuestions = await fetchQuizQuestions(10);
        setQuestions(newQuestions);
        setScore(0);
        setPlayerAnswers([]);
        setNumber(0);
        setLoading(false);
    };

    const checkAnswer = (event: React.MouseEvent<HTMLButtonElement>) => {
        if (!gameOver) {
            const answer = event.currentTarget.value;
            const correct = questions[number].correct_answer === answer;

            if (correct) setScore(prevState => prevState + 1);

            const answerObject = {
                question: questions[number].question,
                answer: answer,
                correct: correct,
                correctAnswer: questions[number].correct_answer
            };

            setPlayerAnswers(prevState => [...prevState, answerObject]);
        }
    };

    const nextQuestion = () => {
        const next = number + 1;

        if (next === 10) {
            setGameOver(true);
        } else {
            setNumber(next);
        }
    };

    return (
        <div className="App">
            <h1>The Impossible Quiz</h1>
            {gameOver || playerAnswers.length === 10 ? (
                <button className="start" onClick={startQuiz}>
                    Start Quiz
                </button>
            ) : null}

            {!gameOver ? <p className="score">Score: {score}</p> : null}
            {loading ? <p>Questions loading...</p> : null}
            {!loading && !gameOver && (
                <QuestionCard
                    questionNum={number + 1}
                    totalQuestions={10}
                    question={questions[number].question}
                    answers={questions[number].answers}
                    playerAnswer={playerAnswers ? playerAnswers[number] : undefined}
                    callback={checkAnswer}
                />
            )}

            {!gameOver && !loading && playerAnswers.length === number + 1 && number !== 9 ? (
                <button className="next" onClick={nextQuestion}>
                    Next Question
                </button>
            ) : null}
        </div>
    );
}

export default App;
