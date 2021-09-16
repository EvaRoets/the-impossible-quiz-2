// import useState hook to keep local state in functional component
import React, {useState} from 'react';
import { fetchQuizQuestions } from "./API";
import { QuestionState } from "./API";

//components
import QuestionCard from "./components/QuestionCard";

const App = () => {
    // declare state variables with pair values, the second of which is a function
    // to store values between function calls/re-renders
    const [loading, setLoading] = useState(false);
    // array of type questionstate
    const [questions, setQuestions] = useState<QuestionState[]>([]);
    const [number, setNumber] = useState(0);
    const [playerAnswers, setPLayerAnswers] = useState([]);
    const [score, setScore] = useState(0);
    const [gameOver, setGameOver] = useState(true);

    console.log(fetchQuizQuestions(10))

    //TODO set functions
    const startQuiz = async () => {

    };
    const checkAnswer = (event: React.MouseEvent<HTMLButtonElement>) => {

    };
    const nextQuestion = () => {

    };

    return (
        <div className="App">
            <h1>The Impossible Quiz</h1>
            {/*when player clicks, startQuiz function is called*/}
            <button className="start" onClick={startQuiz}>Start Quiz</button>
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
