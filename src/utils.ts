// function to shuffle the (in)correct answers
export const shuffleArray = (array: any[]) =>
    [...array].sort(() => Math.random() -0.5);