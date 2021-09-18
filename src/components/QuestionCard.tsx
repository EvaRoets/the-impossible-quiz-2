import React from "react";
import {AnswerObject} from '../App';
import { Wrapper, ButtonWrapper } from './QuestionCard.styles';


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
    <Wrapper>
        <p className="number">Question {questionNum} / {totalQuestions}</p>
        <span dangerouslySetInnerHTML={{__html: question}}/>
        <div>
                {answers.map((answer) => (
                    <ButtonWrapper
                        key={answer}
                        correct={playerAnswer?.correctAnswer === answer}
                        userClicked={playerAnswer?.answer === answer}>
                            <button disabled={!!playerAnswer}
                                    value={answer}
                                    onClick={callback}>
                                <span dangerouslySetInnerHTML={{__html: answer}}/>
                            </button>
                    </ButtonWrapper>
                ))}
            </div>
    </Wrapper>
);

export default QuestionCard;