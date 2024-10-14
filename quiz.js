const questions =[
 {
  question:"Which is the largest desert in the world?", 
  answers:[
   {text: "kalahari" , correct:false},
   { text: "Gobi", correct: false },
   { text: "Sahara", correct: false },
   { text: "Antarctica", correct: true }
  ]
 },
 {
  question: "Which is the largest animal in the world?",
  answers: [
   { text: "Shark", correct: false },
   { text: "Blue whale", correct: true },
   { text: "Elephant", correct: false },
   { text: "Graffe", correct: false }
  ]
 },
 {
  question: "Which is the smallest continent in the world?",
  answers: [
   { text: "Asia", correct: false },
   { text: "Arctic", correct: false },
   { text: "Africa", correct: false },
   { text: "Australlia", correct: true }
  ]
 },
 {
  question: "Which is the largest desert in the world?",
  answers: [
   { text: "kalahari", correct: false },
   { text: "Gobi", correct: false },
   { text: "Sahara", correct: false },
   { text: "Antarctica", correct: true }
  ]
 }
];

const questionElement = document.getElementById("question");
const answersButton = document.getElementById("answer-btn");
const nextButton = document.getElementById("next-btn");


let currentquesindex =0;
let score =0;

function startQuiz(){
 currentquesindex=0;
 score=0;
 nextButton.innerHTML="Next";
 showQuestion();
}

function showQuestion(){
   resetState();

   /////show question 
   let currentques = questions[currentquesindex];
   let quesNo = currentquesindex + 1;
   questionElement.innerHTML = quesNo + ". " + currentques.question;


///////for showing options
   currentques.answers.forEach(answer =>{
    const button = document.createElement("button");
    button.innerHTML= answer.text;
    button.classList.add("btn");
    answersButton.appendChild(button);

    if(answer.correct){
      button.dataset.correct= answer.correct;
    }
    button.addEventListener("click",selectAnswer);
   });
}

function resetState(){
 nextButton.style.display="none";
 while(answersButton.firstChild){
  answersButton.removeChild(answersButton.firstChild);
 }
}

function selectAnswer(e){
 const selectedBtn = e.target;
 const isCorrect = selectedBtn.dataset.correct === "true";
 if(isCorrect){
  selectedBtn.classList.add("correct");
  score++;
 }
 else{
  selectedBtn.classList.add("incorrect");
 }
 Array.from(answersButton.children).forEach(button =>{
  if(button.dataset.correct === "true"){
   button.classList.add("correct");
  }
  button.disabled = true;
 });
 nextButton.style.display="block";
}


function showScore(){
 resetState();
 questionElement.innerHTML = `You scored ${score} out of ${questions.length} !`;
 nextButton.innerHTML= "Try  Again";
 nextButton.style.display= "block";
}

///// show next question
function handleNextBtn() {
 currentquesindex++;
 if (currentquesindex < questions.length) {
  showQuestion();
 }
 else {
  showScore();
 }
}

nextButton.addEventListener("click", ()=>{
 if(currentquesindex < questions.length){
  handleNextBtn();
 }
 else{
  startQuiz();
 }
});

startQuiz();