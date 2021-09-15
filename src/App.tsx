import React from 'react';
import QuestionCard from "./components/QuestionCard";

function App() {
  return (
    <div className="App">
      <h1>The Impossible Quiz</h1>
        <button className="start" onClick={startQuiz}>Start Quiz</button>
        <p className="score">Score:</p>
        <p>Questions loading...</p>
      <QuestionCard/>
    </div>

  );
}

export default App;
