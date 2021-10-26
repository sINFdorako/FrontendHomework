import { questions } from "./questions.js";

var random = Math.floor(Math.random() * (4 - 1 + 1)) + 1;

export function askQuestion() {

    console.log('Question: ' + questions[random].question +
        '\n' + 'A: ' + questions[random].a +
        '\n' + 'B: ' + questions[random].b +
        '\n' + 'C: ' + questions[random].c +
        '\n' + 'D: ' + questions[random].d);
}

export function answerQuestion(answer) {
    if (questions[random].correctAnswer == answer) {
        return true;
    } else {
        return false;
    }

}