import { getQuestions } from "./questions.js";

export async function askQuestion() {
    try{
        const responseQuestions = await getQuestions()
        const question = responseQuestions   
        const questionToAsk = {
            question: question.question,
            a: question.a,
            b: question.b,
            c: question.c,
            d: question.d
        }
        const questionCorrectAnswer = {
            correctAnswer: question.correctAnswer
        }
        console.log(questionToAsk)
        return questionCorrectAnswer
    } catch(err){
        console.log(err)
    }
}


export async function answerQuestion(questionCorrectAnswer, answer) {
    try{ 
        const responseCorrectAnswer = await questionCorrectAnswer
        if(responseCorrectAnswer.correctAnswer == answer) {
            console.log('Correct!')
            return true
        } else {
            console.log(`False, correct answer: ${responseCorrectAnswer.correctAnswer}` )
            return false
        }
    }catch(err){
        console.log(err)
    }
}
