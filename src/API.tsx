export type Question = {
    category: string;
    correct_answer: string;
    difficulty: string;
    incorrect_answer: string[];
    question: string;
    type: string;
}





// Add async to return promises
// Add amount as parameter, but all the other options could be adjusted too

export const fetchQuizQuestions = async (amount: number) => {
    const endPoint = `https://opentdb.com/api.php?amount=${amount}&category=17&difficulty=easy&type=multiple`;
    // await fetch, then await conversion to json
    const data = await (await fetch(endPoint)).json();
    console.log(data)
}
