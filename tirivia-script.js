const questions = {
    "questions": [
        {
            "question": "The capital of Florida is Miami.",
            "answer": false
        },
        {
            "question": "The capital of California is Sacramento.",
            "answer": true
        },
        {
            "question": "The United States was founded in 1998.",
            "answer": false
        },
        {
            "question": "Albert Einstein is Magician",
            "answer": false
        },
        {
            "question": "The inventor of the first computer is Alan Turing.",
            "answer": true
        },
        {
            "question": "Darth Vader is Captain James T. Kirk's father",
            "answer": false
        }
    ]
}

const question = document.getElementById('question')

let playerScore = 0
let questionIndex = 0
let playerScorePercent = 0
let didReachLastQuestion = false
question.innerText = questions.questions[questionIndex].question

function handleTrue() {
    const currentQuestionObject = questions.questions[questionIndex]
    if (currentQuestionObject && currentQuestionObject.answer == true && didReachLastQuestion == false) {
        playerScore += 1
    }

    nextQuestion()
}

function handleFalse() {
    const currentQuestionObject = questions.questions[questionIndex]
    if (currentQuestionObject && currentQuestionObject.answer == false && didReachLastQuestion == false) {
        playerScore += 1
    }

    nextQuestion()
}

function nextQuestion() {
    questionIndex += 1
    if (questionIndex >= questions.questions.length) {
        didReachLastQuestion = true
         playerScorePercent =  (playerScore / questions.questions.length ) * 100
         const youSuck = 'You Suck!!'
         const youRock = 'You Rock!!'
        
            if (playerScorePercent < 60 ) {
                //then message "You Suck!!!"
                yourFinalScore = `Your score is ${playerScore} / ${questions.questions.length}. You get a ${playerScorePercent.toFixed(0)} % Score.  ${youSuck}`
                question.innerText = yourFinalScore
                shouldHideAnswerButtons(true)
            } else {
            //  Message "You Rock!!! "  
                yourFinalScore = `Your score is ${playerScore} / ${questions.questions.length}. You get a ${playerScorePercent.toFixed(0)} % Score.  ${youRock}`
                question.innerText = yourFinalScore
                shouldHideAnswerButtons(true)
            } 


       
    //    // const yourFinalScore = `Your score is ${playerScore} / ${questions.questions.length}. You get a ${playerScorePercent.toFixed(0)} % Score`
    //     question.innerText = yourFinalScore
    //     shouldHideAnswerButtons(true)
    } else {
        question.innerText = questions.questions[questionIndex].question
    }
}

function replay() {
    shouldHideAnswerButtons(false)
    playerScore = 0
    playerScorePercent = 0
    questionIndex = Math.floor(Math.random() * questions.questions.length)
    didReachLastQuestion = false
    question.innerText = questions.questions[questionIndex].question
}

function shouldHideAnswerButtons(flag) {
    const trueButton = document.getElementById('true-button')
    const falseButton = document.getElementById('false-button')
    const replayButton = document.getElementById('replay-button')

    if (flag == true) {
        replayButton.style.opacity = 1
        trueButton.style.opacity = 0
        falseButton.style.opacity = 0
    } else {
        replayButton.style.opacity = 0
        trueButton.style.opacity = 1
        falseButton.style.opacity = 1
    }
}