import { askQuestion, answerQuestion } from './quiz.js'

const question = askQuestion();
console.log(question);


const answer = answerQuestion('d');
console.log(answer ? 'correct' : 'incorrect');