import React from "react";

// Add props to be passed in functional component ~ function arguments
type Props = {
    question: string;
    answers: string[];
    callback: any;
    playerAnswer: any;
    questionNum: number;
    totalQuestions: number;
}

// Add functional component, using the above mentioned props
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
                    <div key={answer}>
                        {/*button is disabled depending on whether the player answers*/}
                        <button disabled={playerAnswer} onClick={callback}>
                            {/*display the answer */}
                            <span dangerouslySetInnerHTML={{__html: answer}}/>
                        </button>
                    </div>
                ))}
            </div>
        </p>
    </div>);

export default QuestionCard;