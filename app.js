// const { Button } = require("bootstrap");

const quizData = [
    {
        question: "Secret so'zining manosi?",
        a: "Sir",
        b: "Boshqa",
        c: "Harf",
        d: "Katta",
    },
    {
        question: "Shout so'zining manosi?",
        a: "Sir",
        b: "Boshqa",
        c: "Baqirmoq",
        d: "Katta",
    },
    {
        question: "Smell so'zining manosi?",
        a: "Sir",
        b: "Boshqa",
        c: "Baqirmoq",
        d: "Hidlash",
    },
    {
        question: "Terrible so'zining manosi?",
        a: "Sir",
        b: "Boshqa",
        c: "Qo'rqinchli",
        d: "Katta",
    },
    
];

const quiz = document.getElementById('quiz')
const question = document.getElementById('question')
const answerEls = document.querySelectorAll('.answer')
const atext = document.getElementById('a_text')
const btext = document.getElementById('b_text')
const ctext = document.getElementById('c_text')
const dtext = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')



let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
    deselectAnswer()
    const currentQuizData = quizData[currentQuiz]

    question.innerText = currentQuizData.question
    atext.innerText = currentQuizData.a
    btext.innerText = currentQuizData.b
    ctext.innerText = currentQuizData.c
    dtext.innerText = currentQuizData.d
}
function deselectAnswer() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}
function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if (answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}


submitBtn.addEventListener('click', () => {
     const answer = getSelected()
     if (answer) {
        if (answer === quizData[currentQuiz].correct)
        score++
     }
     currentQuiz++

     if (currentQuiz < quizData.length) {
        loadQuiz()
     }else {
        quiz.innerHTML = `
        <h2>Sizning javoblaringiz ${score}/${quizData.length} natijasi </h2>
        
        <button onclick="location.reload()">Reload</button>`
     

    

    }
})