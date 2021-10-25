import { questions } from "./questions.js";



function askQuestion() {
    let random = Math.floor(Math.random() * (4 - 1 + 1)) + 1;
    console.log('Question: ' + questions[random].question + '\n' + 'A: ' + questions[random].a + '\n' + 'B: ' + questions[random].b
        + '\n' + 'C: ' + questions[random].c + '\n' + 'D: ' + questions[random].d);

    if (`${answer}` == questions[random].correctAnswer) {
        console.log('That is the correct answer, congratiuations!');
    } else {
        console.log('Your answer is incorrect, try it again with the next question.')
    }
}

console.log(askQuestion());

