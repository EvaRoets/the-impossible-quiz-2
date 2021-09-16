import React from "react";


type Props = {
    question: string;
    answers: string[];
    callback: any;
    playerAnswer: any;
    questionNum: number;
    totalQuestions: number;
}

const QuestionCard: React.FunctionComponent<Props> = ({
      question,
      answers,
      callback,
      playerAnswer,
      questionNum,
      totalQuestions
  }) => (
    <div>
        <p className="number">
            Question {questionNum} / {totalQuestions}
        </p>
        <p dangerouslySetInnerHTML={{__html: question}}>
            <div>
                {answers.map((answer) => (
                    <div key={answer}>
                        <button disabled={playerAnswer} onClick={callback}>
                            <span dangerouslySetInnerHTML={{__html: answer}}/>
                        </button>
                    </div>
                ))}
            </div>
        </p>
    </div>);

export default QuestionCard;