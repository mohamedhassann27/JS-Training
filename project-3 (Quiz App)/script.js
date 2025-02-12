const questionElement=document.querySelector(".quiz__question")
const nextElement=document.querySelector(".next")
const btnsElements=document.querySelectorAll(".btn")
const answersBtnElement=document.querySelector(".quiz__answersBtn")

const questions=[
    {
        question:"ما هو الركن الأول من أركان الإسلام؟", 
        answers:[
            {text: "الصلاة", correct:false},
            {text: "الشهادتان", correct:true},
            {text: "الزكاة", correct:false},
            {text: "الصيام", correct:false}
        ]
    },

    {
        question:"كم عدد سور القرآن الكريم؟",
        answers:[
            {
                text: "100",
                correct:false
            },
            {
                text: "120",
                correct:false
            },
            {
                text: "99",
                correct:false
            },
            {
                text: "114",
                correct:true
            }
        ]

    },

    {
        question:"في أي شهر نزل القرآن الكريم؟",
        answers:[
            {
                text: "ربيع الأول",
                correct:false
            },
            {
                text: "رمضان",
                correct:true
            },
            {
                text: "محرم",
                correct:false
            },
            {
                text: "ذو الحجة",
                correct:false
            }
        ]

    }
]

let currentQuestionIndex=0;
let score=0;

const startQuiz=()=>{
    currentQuestionIndex=0;
    score=0;
    showQuestion()
}

const showQuestion=()=>{
    resetState()
    let questionNumber=currentQuestionIndex+1;
    let currentQuestion=questions[currentQuestionIndex]

    questionElement.innerText= questionNumber+". "+currentQuestion.question

    currentQuestion.answers.forEach((answer=>{
        const btn=document.createElement("button")
        btn.innerText=answer.text
        btn.classList.add("btn")
        answersBtnElement.appendChild(btn)
        if(answer.correct){
            btn.dataset.correct=answer.correct
        }
        btn.addEventListener("click",selectAnswer)
    }))
}

function resetState(){
    nextElement.style.display="none"
    while(answersBtnElement.firstChild){
        answersBtnElement.removeChild(answersBtnElement.firstChild)
    }
}

function selectAnswer(e){
    const selectBtn=e.target
    const isCorrect= selectBtn.dataset.correct==="true"
    if(isCorrect){
        selectBtn.classList.add("correct")
        score++;
    }else{
        selectBtn.classList.add("inCorrect")
    }
    Array.from(answersBtnElement.children).forEach(btn=>{
        if(btn.dataset.correct=="true"){
            btn.classList.add("correct")
        }
        btn.disabled=true
    })
    nextElement.style.display="block"
    
}

function showScore(){
    resetState()
    questionElement.innerText=`you scored ${score} out of ${questions.length}!`
    nextElement.innerText="play again"
    nextElement.style.display="block"
}

function handleNextButton(){
    nextElement.innerText="Next"
    currentQuestionIndex++
    if(currentQuestionIndex<questions.length){
        showQuestion()
    }
    else{
        showScore()
    }
}

nextElement.addEventListener("click",()=>{
    if(currentQuestionIndex<questions.length){
        handleNextButton()
    }
    else{
        startQuiz()
    }
})


startQuiz()


