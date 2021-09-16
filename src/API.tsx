// Add async to return promises
// Add amount as parameter, but all the other options could be adjusted too

export const fetchQuizQuestions = async (amount: number) => {
    const endPoint = `https://opentdb.com/api.php?amount=${amount}&category=17&difficulty=medium&type=multiple`;
    // await fetch, then await conversion to json
    const data = await (await fetch(endPoint)).json();
    console.log(data)
}
