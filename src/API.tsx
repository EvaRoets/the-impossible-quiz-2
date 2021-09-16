// import shuffle function
import {shuffleArray} from "./utils";

// create own type
export type Question = {
    category: string;
    correct_answer: string;
    difficulty: string;
    incorrect_answers: string[];
    question: string;
    type: string;
}

// ensure correct and incorrect answers appear in same array
export type QuestionState = Question & { answers: string [] };

// Add async to return promises
// Add amount as parameter, but all the other options could be adjusted too
export const fetchQuizQuestions = async (amount: number) => {
    const endPoint = `https://opentdb.com/api.php?amount=${amount}&category=17&difficulty=easy&type=multiple`;
    // await fetch, then await conversion to json
    try {
        const data = await (await fetch(endPoint)).json();
        return data.results.map((question: Question) => (
            //return object
            {
                //grab all properties of the question with spread operator
                ...question,
                answers: shuffleArray([...question.incorrect_answers, question.correct_answer])
            }
        ))
    } catch (error) {
        alert("Oh-oh, something went wrong");
    }
}
