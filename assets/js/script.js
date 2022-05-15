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
//Pull Highscore list from local storage
var highscore1Name= JSON.parse(localStorage.getItem("highscore1Name"));
var highscore1Score=JSON.parse(localStorage.getItem("highscore1Score"));
var highscore2Name= JSON.parse(localStorage.getItem("highscore2Name"));
var highscore2Score=JSON.parse(localStorage.getItem("highscore2Score"));
var highscore3Name= JSON.parse(localStorage.getItem("highscore3Name"));
var highscore3Score=JSON.parse(localStorage.getItem("highscore3Score"));
var highscore4Name= JSON.parse(localStorage.getItem("highscore4Name"));
var highscore4Score=localStorage.getItem("highscore4Score");
var highscore5Name= localStorage.getItem("highscore5Name");
var highscore5Score=localStorage.getItem("highscore5Score");
//Identify highscore list in html
var highscore1 = document.getElementById("highscore1");
var highscore2 = document.getElementById("highscore2");
var highscore3 = document.getElementById("highscore3");
var highscore4 = document.getElementById("highscore4");
var highscore5 = document.getElementById("highscore5");

var timeLeft = 60;


// functions of the buttons
var openRules = function(){
    document.getElementById("rules-list").removeAttribute("class", "hide");
    document.getElementById("question-card").setAttribute("class", "hide");
    document.getElementById("highscore-list").setAttribute("class", "hide")
};

var startQuiz = function(){
    document.getElementById("rules-list").setAttribute("class", "hide");
    document.getElementById("highscore-list").setAttribute("class", "hide");
    document.getElementById("question-card").removeAttribute("class", "hide");
      generateQuestion();   
};

var highScoresList = function(){
    document.getElementById("rules-list").setAttribute("class", "hide");
    document.getElementById("question-card").setAttribute("class", "hide");
    document.getElementById("highscore-list").removeAttribute("class", "hide")
};

let quizQuestionIndex =0;
let lastQuestionIndex = 8;
var generateQuestion = function() {
  let q = quizQuestions[quizQuestionIndex];
  question.innerHTML = "<h2>" + q.question + "<h2>";
  btnA.innerHTML = q.btnA;
  btnB.innerHTML = q.btnB;
  btnC.innerHTML = q.btnC;
  btnD.innerHTML = q.btnD;
};

//End of quiz funtion, hides card and sets score info 
var endQuiz = function(){
  document.getElementById("question-card").setAttribute("class", "hide");
  document.getElementById("highscore-list").removeAttribute("class", "hide");
  playerInfo.name=window.prompt("Please enter your name to save your score");
  saveHighscore();
};
var saveHighscore = function(){
  if(highscore1Score<playerInfo.score){
  localStorage.setItem("highscore1Name", JSON.stringify(playerInfo.name));
  localStorage.setItem("highscore1Score", JSON.stringify(playerInfo.score));
}
  else if(highscore1Score>playerInfo.score>=highscore2Score){
    localStorage.setItem("highscore2Name", JSON.stringify(playerInfo.name));
    localStorage.setItem("highscore2Score", JSON.stringify(playerInfo.score));
  }
  else if(highscore2Score>playerInfo.score>=highscore3Score){
    localStorage.setItem("highscore3Name", JSON.stringify(playerInfo.name));
    localStorage.setItem("highscore3Score", playerInfo.score);
  }
  else if(highscore3Score>playerInfo.score>=highscore4Score){
    localStorage.setItem("highscore4Name", JSON.stringify(playerInfo.name));
    localStorage.setItem("highscore4Score", JSON.stringify(playerInfo.score));
  }
  else if(highscore4Score>playerInfo.score>=highscore5Score){
    localStorage.setItem("highscore5Name", JSON.stringify(playerInfo.name));
    localStorage.setItem("highscore5Score", JSON.stringify(playerInfo.score));
  }
  else{
    window.alert("Better luck next time!")
  }
};

    
  
// };

// checks answer for correct or wrong
var checkAnswer = function(event){

  if(event.target.getAttribute("id")===quizQuestions[quizQuestionIndex].correct){
    playerInfo.score=playerInfo.score+5;
  }
  else{
    timeLeft=timeLeft-5;
  };
  if(quizQuestionIndex<lastQuestionIndex){
  quizQuestionIndex++;
  generateQuestion();
  }else{
    endQuiz();};
};

// sets highscore list
highscore1.innerHTML= highscore1Name +" "+ highscore1Score;
highscore2.innerHTML= highscore2Name +" "+ highscore2Score;
highscore3.innerHTML= highscore3Name +" "+ highscore3Score;
highscore4.innerHTML= highscore4Name +" "+ highscore4Score;
highscore5.innerHTML= highscore5Name +" "+ highscore5Score;


//Sets content for the question card
var quizQuestions=[{
  question: "What does HTML stand for?",
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
  correct:"btn-C"
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






    