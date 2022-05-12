// pulling buttons to js
var rules = document.querySelector("#rules-btn");
var start = document.querySelector("#start-btn");
var highScores = document.querySelector("#high-scores-btn");
var timerEl = document.getElementById("countdown");
var answers = document.querySelector("#answer-buttons");
var question = document.querySelector("#question");

var questionEl= document.createElement("span");
var ansA = document.createElement("button");
var ansB = document.createElement("button");
var ansC = document.createElement("button");
var ansD = document.createElement("button");


questionEl.textContent = "";
ansA.textContent = "";
ansB.textContent = "";
ansC.textContent = "";
ansD.textContent = "";


// functions of the buttons
var openRules = function(){
    document.getElementById("rules-list").removeAttribute("class", "hide");
    document.getElementById("question-card").setAttribute("class", "hide")
};

var generateQuestions = function(){
    question.appendChild(questionEl);
    answers.appendChild(ansA);
    answers.appendChild(ansB);
    answers.appendChild(ansC);
    answers.appendChild(ansD);
};

var startQuiz = function(){
    document.getElementById("rules-list").setAttribute("class", "hide");
    document.getElementById("question-card").removeAttribute("class", "hide");
    countDown();
    generateQuestions(quizQuestions);
};

var highScoresList = function(){
    document.getElementById("rules-list").setAttribute("class", "hide");
    document.getElementById("question-card").setAttribute("class", "hide")
};

var countDown = function() {
    var timeLeft = 60;
    var timeInterval = setInterval(function () {
      if (timeLeft > 1) {
        timerEl.textContent = timeLeft + ' seconds remaining';
        timeLeft--;
      } 
      else if (timeLeft === 1) {
        timerEl.textContent = timeLeft + ' second remaining';
        timeLeft--;
      } 
      else {
        timerEl.textContent = '';
        clearInterval(timeInterval);
      }
    }, 1000);
};

var quizQuestions=[
    question.textContent= "what does HTML stand for?",
    ansA.textContent= "HyperText Markup Language",
    ansB.textContent= "something else",
    ansC.textContent= "another thing",
    ansD.textContent= "thing",

];



// event listeners
rules.addEventListener('click', openRules);

start.addEventListener("click", startQuiz);

highScores.addEventListener("click", highScoresList);

    