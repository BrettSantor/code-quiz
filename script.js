//create objects with an array of keys to be called by index
var allQuestions = [
    {text:"question1", choices:["a", "b", "c", "d"], correct: "a"},
    {text:"question2", choices:["a", "b", "c", "d"], correct: "a"},
    {text:"question3", choices:["a", "b", "c", "d"], correct: "a"},
    {text:"question4", choices:["a", "b", "c", "d"], correct: "a"},
    {text:"question5", choices:["a", "b", "c", "d"], correct: "a"},
    {text:"question6", choices:["a", "b", "c", "d"], correct: "a"},
];
//variable to iterate through questions
var Q = 0;
//variable to target span tag for timer
var timeEl = document.querySelector(".timer");
//variable used to decrease time
var secondsLeft = 60;

var quizArea = document.querySelector(".qSpot");
var choiceArea = document.querySelector(".cSpot");

function startGame(){
   // hides start screen >
   document.querySelector(".start").classList.add("hide")
   //show quiz screen >
    document.querySelector(".quiz").classList.remove("hide")
    //call function to load first question

}//create timer >
function setTimer() {
    //setInterval method repeatedly executes code with a fixed delay each execution
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timeEl.textContent = secondsLeft;
        if(secondsLeft === 0) {
    //clearInterval method stops the called action set in place by setInterval method
            clearInterval(timerInterval);
        }
    }, 1000);
}
function loadQuestions(arr) {
    var question = allQuestions[Q].text;
   
    quizArea.innerHTML = "";
    quizArea.innerHTML = question;
    
}
function loadAnswers(arr) {
    //var answer = allQuestions[Q].choices;
    //choiceArea.innerHTML = "";
    //choiceArea.innerHTML = answer;
    for(var i = 0; i < allQuestions[Q].choices.length; i++) {
        var btn = document.createElement("button");
        var c = document.createTextNode(allQuestions[Q].choices[i]);
        btn.appendChild(c);
        document.querySelector(".cSpot").appendChild(btn);
    }

}
//on click show first question
//append answer buttons to question
//add event listener to answer buttons
//on click check for correct answer
//if correct add to score
//if wrong decrement timer -10 seconds
//show next question
//when out of  questions or out of time end game
//collect initials 
//save score and initials to local storage
//when user hits high scores show list of high scores
document.querySelector(".start-btn").addEventListener("click", startGame)
//start timer
document.querySelector(".start-btn").addEventListener("click", setTimer)

document.querySelector(".start-btn").addEventListener("click", loadQuestions)
document.querySelector(".start-btn").addEventListener("click", loadAnswers)