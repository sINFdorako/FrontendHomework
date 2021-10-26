import { questions } from "./questions.js";


export function askQuestion() {
    let random = Math.floor(Math.random() * (4 - 1 + 1)) + 1;
    return questions[random]
}

function answerQuestion() {

}




