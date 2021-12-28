import { getQuestions } from "./questions.js";

export const askQuestion = async () => {
    try{
        const responseQuestions = await getQuestions()
        const question = responseQuestions
        const correct = question.correctAnswer;
        console.log(correct)
        localStorage.setItem('correctAnswer', correct);
        const questionToAsk = {
            question: question.question,
            a: question.a,
            b: question.b,
            c: question.c,
            d: question.d
        } 
        return questionToAsk   
    }catch(e){
        console.log(e)
    }
}

export function answerQuestion(correctAnswer, answer) {
    try{ 
        if(correctAnswer === answer) {
            console.log('Deine Antwort ist korrekt!')
            return true
        } else {
            console.log(`Deine Antwort war leider falsch, richtig wäre: ${correctAnswer}` )
            return false
        }
    }catch(err){
        console.log(err)
    }
}

console.log(answerQuestion('ein Preis für die schlechteste Leistung innerhalb eines Filmjahres', 'ein Preis für die schlechteste Leistung innerhalb eines Filmjahres') ? 'True' : 'False')