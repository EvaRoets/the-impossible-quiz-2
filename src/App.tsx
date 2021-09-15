import React, {useState} from 'react';

//components
import QuestionCard from "./components/QuestionCard";

const App = () => {
    const [loading, setLoading] = useState(false);
    const [questions, setQuestions] = useState([]);
    const [number, setNumber] = useState(0);
    const [playerAnsers, setPLayerAnswers] = useState([]);
    const [score, setScore] = useState(0);
    const [gameOver, setGameOver] = useState(true);


  return (
    <div className="App">
      <h1>The Impossible Quiz</h1>
        <button className="start" onClick={startQuiz}>Start Quiz</button>
        <p className="score">Score:</p>
        <p>Questions loading...</p>
      <QuestionCard/>
        <button className="next" onClick={nextQuestion}>Next Question</button>
    </div>
  );
}

export default App;
