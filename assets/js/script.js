// pulling elements to js
var rules = document.querySelector("#rules-btn");
var start = document.querySelector("#start-btn");
var highScores = document.querySelector("#high-scores-btn");
var timerEl = document.getElementById("countdown");
var answers = document.querySelector("#answer-buttons");
var question = document.getElementById("question");
var btnA = document.getElementById("btn-A");
var btnB = document.getElementById("btn-B");
var btnC = document.getElementById("btn-C");
var btnD = document.getElementById("btn-D");


var timeLeft = 60;


// functions of the buttons
var openRules = function(){
    document.getElementById("rules-list").removeAttribute("class", "hide");
    document.getElementById("question-card").setAttribute("class", "hide")
};

var startQuiz = function(){
    document.getElementById("rules-list").setAttribute("class", "hide");
    document.getElementById("question-card").removeAttribute("class", "hide");
    for (var i = 0; i < quizQuestions.length; i++){
      generateQuestion();
        };   
};

var highScoresList = function(){
    document.getElementById("rules-list").setAttribute("class", "hide");
    document.getElementById("question-card").setAttribute("class", "hide")
};

let quizQuestionIndex =0;

var generateQuestion = function() {
  let q = quizQuestions[quizQuestionIndex];
  question.innerHTML = "<h2>" + q.question + "<h2>";
  btnA.innerHTML = q.btnA;
  btnB.innerHTML = q.btnB;
  btnC.innerHTML = q.btnC;
  btnD.innerHTML = q.btnD;
};

var checkAnswer = function(event){

  if(event.target.getAttribute("id")===quizQuestions[quizQuestionIndex].correct){
    playerInfo.score=playerInfo.score+5;
    quizQuestionIndex++;
    generateQuestion();
    console.log(playerInfo.score);
  }
  else{
    timeLeft=timeLeft-5;
    quizQuestionIndex++;
    generateQuestion();
    console.log(playerInfo.score);
  };
};

//Sets content for the question card
var quizQuestions=[{
  question: "what does HTML stand for?",
  btnA:"HyperText Markup Language",
  btnB:"HyperText Money Language",
  btnC: "HotType Markup Language",
  btnD:"HighType Markdown Language",
  correct:"btn-A"
}, 
{
  question:"What does CSS stand for?",
  btnA:"Cascading Style Sheet",
  btnB:"Creeping Style Sheet",
  btnC:"Crawling Slang Style",
  btnD:"Cascading Style Style",
  correct: "btn-A"
},
{
  question:"What is a Boolean Value",
  btnA:"True",
  btnB:"False",
  btnC:"Correct",
  btnD:"True or False",
  correct:"btn-D"
},
{
  question:"",
  btnA:"",
  btnB:"",
  btnC:"",
  btnD:"",
  correct:""
},
{
  question:"",
  btnA:"",
  btnB:"",
  btnC:"",
  btnD:"",
  correct:""
},
{
  question:"",
  btnA:"",
  btnB:"",
  btnC:"",
  btnD:"",
  correct:""
},
{
  question:"",
  btnA:"",
  btnB:"",
  btnC:"",
  btnD:"",
  correct:""
},
{
  question:"",
  btnA:"",
  btnB:"",
  btnC:"",
  btnD:"",
  correct:""
},
{
  question:"",
  btnA:"",
  btnB:"",
  btnC:"",
  btnD:"",
  correct:""
}
];

//player info
var playerInfo = {
  name:"",
  score:0
};


// event listeners
rules.addEventListener("click", openRules);
start.addEventListener("click", startQuiz);
highScores.addEventListener("click", highScoresList);
btnA.addEventListener("click", checkAnswer);
btnB.addEventListener("click", checkAnswer);
btnC.addEventListener("click", checkAnswer);
btnD.addEventListener("click", checkAnswer);






    