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
    {
        question: 'Wie heißt die Hauptstadt der Slowakei?',
        correctAnswer: 'Bratislava',
        a: 'Sofia',
        b: 'Prag',
        c: 'Bratislava',
        d: 'Ljubljan'
    },
    {
        question: 'Wie viele Zähne hat ein erwachsener Mensch normalerweise?',
        correctAnswer: '32',
        a: '26',
        b: '30',
        c: '32',
        d: '36'
    },
    {
        question: 'Wer wählt den Bundespräsidenten?',
        correctAnswer: 'Bundesversammlung',
        a: 'Bundeskanzler',
        b: 'Bundestag',
        c: 'Bundesrat',
        d: 'Bundesversammlung'
    },
    {
        question: 'Wofür steht die Abkürzung KGaA?',
        correctAnswer: 'Kommanditgesellschaft auf Aktien',
        a: 'Kreditgesellschaft auf Aktien',
        b: 'Kommanditgesellschaft auf Aktien',
        c: 'Kardinalgesellschaft auf Aktien',
        d: 'Kompetenzgesellschaft auf Aktien'
    },
    {
        question: 'Wie hoch ist die Mehrwertsteuer in Deutschland? (Vor der Senkung durch das Konjukturpaket)?',
        correctAnswer: '19 Prozent',
        a: '16 Prozent',
        b: '17 Prozent',
        c: '18 Prozent',
        d: '19 Prozent'
    },
    {
        question: 'Welches Land ist kein ständiges Mitglied im Sicherheitsrat der Vereinten Nationen?',
        correctAnswer: 'Deutschland',
        a: 'USA',
        b: 'Russland',
        c: 'Deutschland',
        d: 'China'
    },
    {
        question: 'Welches dieser Tiere hält keinen Winterschlaf?',
        correctAnswer: 'Eichörnchen',
        a: 'Eichhörnchen',
        b: 'Fledermaus',
        c: 'Igel',
        d: 'Siebenschläfer'
    },
    {
        question: 'Wie heißt die Hauptstadt von Thüringen?',
        correctAnswer: 'Erfurt',
        a: 'Magdeburg',
        b: 'Erfurt',
        c: 'Dresden',
        d: 'Potsdam'
    },
    {
        question: 'In welcher Einheit wird der elektrische Widerstand gemessen?',
        correctAnswer: 'Ohm',
        a: 'Ohm',
        b: 'Volt',
        c: 'Ampere',
        d: 'Watt'
    },
    {
        question: 'Was ist ein Oxymoron?',
        correctAnswer: 'Ein innerer Widerspruch',
        a: 'Ein innerer Widerspruch',
        b: 'Ein Versfuß',
        c: 'Eine Wiederholung',
        d: 'Eine Frageform'
    },
    {
        question: 'Wofür steht das „L“ im Sender RTL?',
        correctAnswer: 'Luxenbourg',
        a: 'London',
        b: 'Luxenbourg',
        c: 'Liechtenstein',
        d: 'Los Angeles'
    },
    {
        question: 'Wo fanden die Olympischen Spiele 1996 statt?',
        correctAnswer: 'Atlanta',
        a: 'Atlanta',
        b: 'Turin',
        c: 'Barcelona',
        d: 'Los Angeles'
    },
    {
        question: 'Wie heißt die Hauptstadt von Äthiopien?',
        correctAnswer: 'Addis Abeba',
        a: 'Nairobi',
        b: 'Mogadischu',
        c: 'Harare',
        d: 'Addis Abeba'
    },
    {
        question: 'Wer war von 1981 bis 1995 französischer Präsident?',
        correctAnswer: 'Francois Mitterand',
        a: 'Jaques Chirac',
        b: 'Francois Mitterand',
        c: 'Valéry Giscard d’Estaing',
        d: 'Charles de Gaulle'
    },
    {
        question: 'Was soll Cäsar gesagt haben, als er den Rubikon überquerte?',
        correctAnswer: 'alea iacta est',
        a: 'veni, vidi, vici',
        b: 'divide et empera',
        c: 'alea iacta est',
        d: 'et tu, brute'
    },
    {
        question: 'Wer ist Rekordtorschütze der Bundesliga?',
        correctAnswer: 'Robert Lewandowski',
        a: 'Jupp Heynckes',
        b: 'Robert Lewandowski',
        c: 'Gerd Müller',
        d: 'Klaus Fischer'
    },
    {
        question: 'Wie viele Oscars gewann der Film „Titanic“?',
        correctAnswer: '11',
        a: '10',
        b: '11',
        c: '12',
        d: '13'
    },
    {
        question: 'Teneriffa, Gran Canaria und Fuerteventura gehören zu den…?',
        correctAnswer: 'Kanarischen Inseln',
        a: 'Kanarischen Inseln',
        b: 'Balearen',
        c: 'Karibischen Inseln',
        d: 'Azoren'
    },
    {
        question: 'Wie beginnt Artikel 1 des deutschen Grundgesetzes?',
        correctAnswer: '„Die Würde des Menschen ist unantastbar.“',
        a: '„Alle Menschen sind vor dem Gesetz gleich.“',
        b: '„Jeder hat das Recht auf die freie Entfaltung seiner Persönlichkeit.“',
        c: '„Jeder hat das Recht, seine Meinung in Wort, Schrift und Bild frei zu äußern.“',
        d: '„Die Würde des Menschen ist unantastbar.“'
    },
    {
        question: 'Wer gilt als Verfasser der amerikanischen Unabhängigkeitserklärung?',
        correctAnswer: 'Thomas Jefferson',
        a: 'Thomas Jefferson',
        b: 'Benjamin Franklin',
        c: 'George Washington',
        d: 'John Adams'
    },
    
]

export const getQuestions = async () => {
    
    await delay()
    let random = Math.floor(Math.random() * (questions.length - 1 + 1)) + 0;
    if(localStorage.getItem('randomNumber')){
        console.log('randomNumber already exists')
        if(random == localStorage.getItem('randomNumber')){
            random = Math.floor(Math.random() * (questions.length - 1 + 1)) + 0;
        }
    } 
    localStorage.setItem('randomNumber', random)
    
    return questions[random]
}

console.log(questions.length)



