import React from "react";
import {AnswerObject} from '../App';


type Props = {
    question: string;
    answers: string[];
    callback: (event: React.MouseEvent<HTMLButtonElement>) => void;
    playerAnswer: AnswerObject | undefined;
    questionNum: number;
    totalQuestions: number;
}

const QuestionCard: React.FC<Props> = ({
  question,
  answers,
  callback,
  playerAnswer,
  questionNum,
  totalQuestions
}) => (
    <div>
        <p className="number">Question {questionNum} / {totalQuestions}</p>
        <p dangerouslySetInnerHTML={{__html: question}}>
            <div>
                {answers.map((answer) => (
                    <div key={answer}>
                        <button disabled={playerAnswer} onClick={callback} value={answer}>
                            <span dangerouslySetInnerHTML={{__html: answer}}/>
                        </button>
                    </div>
                ))}
            </div>
        </p>
    </div>);

export default QuestionCard;