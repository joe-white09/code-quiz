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
  btnC:"Computer Style Sheet",
  btnD:"Cascading Style Store",
  correct: "btn-A"
},
{
  question:"What is a Boolean Value?",
  btnA:"String",
  btnB:"Object",
  btnC:"Correct",
  btnD:"True or False",
  correct:"btn-D"
},
{
  question:"What is the correct syntax for an array in JavaScript?",
  btnA:"{  }",
  btnB:"(   )",
  btnC:"[    ]",
  btnD:"<    >",
  correct:"btn-C"
},
{
  question:"What is the main purpose of using JavaScript?",
  btnA:"To change how the webpage is displayed",
  btnB:"To save user information",
  btnC:"To build the framework of the webpage",
  btnD:"To add user interactivity",
  correct:"btn-D"
},
{
  question:"What is the proper syntax to leave a comment in CSS code?",
  btnA:"!  !",
  btnB:"//",
  btnC:"/*  */",
  btnD:"$(  )",
  correct:"btn-B"
},
{
  question:"What is the purpose of indentation and spacing while coding?",
  btnA:"Spacing allows the computer to separate different functions of code",
  btnB:"To allow easier readability for people reading it",
  btnC:"There is no purpose at all",
  btnD:"It looks cool",
  correct:"btn-B"
},
{
  question:"What is the purpose of leaving coding comments?",
  btnA:"To let the computer know what to do with the code section",
  btnB:"Green text in the document looks cool",
  btnC:"It has no purpose at all",
  btnD:"To describe sections or function of the code for others to easily see",
  correct:"btn-D"
},
{
  question:"What is an error in code called?",
  btnA:"A Bug",
  btnB:"A Stop",
  btnC:"A Problem",
  btnD:"An Error",
  correct:"btn-A"
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






    