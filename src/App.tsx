// import useState hook to keep local state in functional component
import React, {useState} from 'react';
import {fetchQuizQuestions} from "./API";

//components
import QuestionCard from "./components/QuestionCard";

//types
import {QuestionState} from "./API";

type AnswerObject = {
    question: string;
    answer: string;
    correct: boolean;
    correctAnswer: string;
}

const App = () => {
    // declare state variables with pair values, the second of which is a function
    // to store values between function calls/re-renders
    const [loading, setLoading] = useState(false);
    // array of type question state
    const [questions, setQuestions] = useState<QuestionState[]>([]);
    const [number, setNumber] = useState(0);
    const [playerAnswers, setPlayerAnswers] = useState<AnswerObject[]>([]);
    const [score, setScore] = useState(0);
    const [gameOver, setGameOver] = useState(true);

    console.log(questions)

    const startQuiz = async () => {
        // trigger api fetch with built-in function
        const newQuestions = await fetchQuizQuestions(10);

        setLoading(true);
        setGameOver(false);
        setQuestions(newQuestions);
        setScore(0);
        setPlayerAnswers([]);
        setNumber(0);
        setLoading(false);
    };

    const checkAnswer = (event: React.MouseEvent<HTMLButtonElement>) => {

    };

    //TODO set function
    const nextQuestion = () => {

    };

    return (
        <div className="App">
            <h1>The Impossible Quiz</h1>
            {/*ONLY DISPLAY BUTTON WHEN GAME IS OVER OR IF PLAYER ANSWERED THE LAST QUESTION*/}
            {gameOver || playerAnswers.length === 10 ? (
                    <button className="start" onClick={startQuiz}>
                        Start Quiz
                    </button>
                ) : null
            }

            <p className="score">Score:</p>
            <p>Questions loading...</p>
            {/*<QuestionCard*/}
            {/*    // update props ~ function arguments with states*/}
            {/*    questionNum={number + 1}*/}
            {/*    totalQuestions={10}*/}
            {/*    question={questions[number].question}*/}
            {/*    answers={questions[number].answers}*/}
            {/*    playerAnswer={playerAnswers ? playerAnswers[number] : undefined}*/}
            {/*    callback={checkAnswer}*/}
            {/*/>*/}
            <button className="next" onClick={nextQuestion}>Next Question</button>
        </div>
    );
}

export default App;
