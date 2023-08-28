const questions = [
    {
        questions: "When did india got independence?",
        answers:[
            {text: "13 August 1945", correct:false},
            {text: "15 August 1947", correct:true},
            {text: "12 August 1945", correct:false},
            {text: "13 August 1947", correct:false},
        ]
    },

    {
        questions: "who was the first president of india?",
        answers:[
            {text: "Dr Rajendra Prasad", correct:true},
            {text: "APJ Abdul Kalam", correct:false},
            {text: "Indira Gandhi", correct:false},
            {text: "Mahatma Gandhi", correct:false},
        ]
    },

    {
        questions: "When did chandrayaan 3 land on moon?",
        answers:[
            {text: "21 August 2023", correct:false},
            {text: "22 August 2022", correct:false},
            {text: "22 August 2022", correct:false},
            {text: "23 August 2023", correct:true},
        ]
    },

    {
        questions: "What is the capital of Uttar Pradesh?",
        answers:[
         { text: "Mumbai", correct: false},
            {text: "Lucknow", correct:true},
            {text: "Kohima", correct:false},
            {text: "Patna", correct:false},
        ]
    }
];

const questionElement= document.querySelector(".Question");
const answerButtons= document.querySelector(".answercontainer");
const next = document.querySelector(".Next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    let score = 0;
    next.innerHTML= "Next";
    showQuestion();
}
function showQuestion(){
resetState();

    let   currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex +1;
    questionElement.innerHTML = questionNo + "." + currentQuestion.questions

   currentQuestion.answers.forEach(answer => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("Button");
    answerButtons.appendChild(button);
if(answer.correct){
    button.dataset.correct = answer.correct;
}
button.addEventListener("click", selectAnswer);
   })
}

function resetState(){
next.style.display = "none"
while(answerButtons.firstChild){
    answerButtons.removeChild(answerButtons.firstChild);
   
}
}

function selectAnswer(e){
    const selectbtn = e.target;
    const isCorrect = selectbtn.dataset.correct === "true";

    if(isCorrect){
        selectbtn.classList.add("correct");
        score++;
    }
    else{
        selectbtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    next.style.display ="block"

};
function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    next.innerHTML ="Play Again"
    next.style.display = "block";
    score = 0;
}

function handleNextButton(){
    currentQuestionIndex++;
    if (currentQuestionIndex<questions.length){
        showQuestion();
    }
    else {
        showScore();
    }

}

   next.addEventListener("click", ()=>{
    if(currentQuestionIndex<questions.length){
        handleNextButton();
       
    }
    else{
        startQuiz();
    }
   })

startQuiz();
