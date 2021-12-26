import { delay } from "./delay.js"

export const questions = [{
        question: '0Some Question',
        correctAnswer: 'a',
        a: 'answerA',
        b: 'answerB',
        c: 'answerC',
        d: 'answerD'
    },

    {
        question: '1Some Question',
        correctAnswer: 'b',
        a: 'answerA',
        b: 'answerB',
        c: 'answerC',
        d: 'answerD'
    },

    {
        question: '2Some Question',
        correctAnswer: 'c',
        a: 'answerA',
        b: 'answerB',
        c: 'answerC',
        d: 'answerD'
    },

    {
        question: '3Some Question',
        correctAnswer: 'd',
        a: 'answerA',
        b: 'answerB',
        c: 'answerC',
        d: 'answerD'
    },

    {
        question: '4Some Question',
        correctAnswer: 'a',
        a: 'answerA',
        b: 'answerB',
        c: 'answerC',
        d: 'answerD'
    },
]

export const getQuestions = async () => {
    await delay()
    let random = Math.floor(Math.random() * (4 - 1 + 1)) + 1;
   
    return questions[random]
}




