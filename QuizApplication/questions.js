import { delay } from "./delay.js"

export const questions = [{
        question: 'Das flächenmäßig kleinste Bundesland heißt ...',
        correctAnswer: '...Bremen',
        a: '...Berlin',
        b: '...Bremen',
        c: '...Saarland',
        d: '...Hamburg'
    },

    {
        question: 'Was bedeutet das lateinische "carpe diem" ?',
        correctAnswer: 'Nutze den Tag.',
        a: 'Nutze den Tag.',
        b: 'Genieße das Leben.',
        c: 'Dein Tag wird toll werden.',
        d: 'Man sieht sich immer zwei mal im Leben.'
    },

    {
        question: 'Was ist die "Goldene Himbeere"?',
        correctAnswer: 'ein Preis für die schlechteste Leistung innerhalb eines Filmjahres',
        a: 'ein Preis für die schlechteste Leistung innerhalb eines Filmjahres',
        b: 'eine Nachspeise aus Russland',
        c: 'das teuerste Schmuckstück der Welt',
        d: 'das Symbol einer Sekte'
    },

    {
        question: 'Welcher deutsche Herrscher trug den Beinamen "der Große"?',
        correctAnswer: 'Friedrich II. von Preußen',
        a: 'Friedrich der I. von Preußen',
        b: 'Friedrich II. von Preußen',
        c: 'Friedrich der III. von Sachsen',
        d: 'Friedrich der III. von Österreich'
    },

    {
        question: 'Welcher Pilz ist einer der giftigsten der Welt?',
        correctAnswer: 'der Grüne Knollenblätterpilz',
        a: 'der Grüne Knollenblätterpilz',
        b: 'der Fliegenpilz',
        c: 'der Gemeine Kartoffelbovist',
        d: 'der Satansröhrling'
    },
]

export const getQuestions = async () => {
    await delay()
    let random = Math.floor(Math.random() * (4 - 1 + 1)) + 0;
   
    return questions[random]
}




