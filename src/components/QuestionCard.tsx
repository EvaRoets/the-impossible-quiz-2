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
        {/*current question number*/}
        <p className="number">Question {questionNum} / {totalQuestions}</p>

        {/*current question*/}
        <p dangerouslySetInnerHTML={{__html: question}}>
            <div>
                {/* current answer possibilities */}
                {answers.map(answer => (
                    <div>
                        <button disabled={userAnswer} onClick={callback}>
                            <span dangerouslySetInnerHTML={{__html: answer}}/>
                        </button>
                    </div>
                ))}
            </div>
        </p>
    </div>);

export default QuestionCard;