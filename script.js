var questions = [
    {text:"question1", choices:["a", "b", "c", "d"], correct: "a"},
    {text:"question2", choices:["a", "b", "c", "d"], correct: "a"},
    {text:"question3", choices:["a", "b", "c", "d"], correct: "a"},
    {text:"question4", choices:["a", "b", "c", "d"], correct: "a"},
    {text:"question5", choices:["a", "b", "c", "d"], correct: "a"},
    {text:"question6", choices:["a", "b", "c", "d"], correct: "a"},
]
var Q = 0

//create timer
function startGame(){
    //start timer
    //hides start screen
    document.querySelector(".start").classList.add("hide")
    //show quiz screen
    document.querySelector(".quiz").classList.remove("hide")
    //call function to load first question
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