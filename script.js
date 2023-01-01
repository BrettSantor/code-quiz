//create objects with an array of keys to be called by index
var allQuestions = [
    { text: "question1", choices: ["a", "b", "c", "d"], correct: "c" },
    { text: "question2", choices: ["a", "b", "c", "d"], correct: "d" },
    { text: "question3", choices: ["a", "b", "c", "d"], correct: "b" },
    { text: "question4", choices: ["a", "b", "c", "d"], correct: "c" },
    { text: "question5", choices: ["a", "b", "c", "d"], correct: "d" },
    { text: "question6", choices: ["a", "b", "c", "d"], correct: "a" },
];
//variable to iterate through questions
var Q = 0;
//variable to target span tag for timer
var timeEl = document.querySelector(".timer");
//variable used to decrease time
var secondsLeft = 60;
//variable to target players score
var scoreEl = document.querySelector(".score");

var quizArea = document.querySelector(".qSpot");
var choiceArea = document.querySelector(".cSpot");
var userScore = 0; 
var yourScore = document.querySelector(".yourScore");

function startGame() {
    // hides start screen >
    document.querySelector(".start").classList.add("hide")
    //show quiz screen >
    document.querySelector(".quiz").classList.remove("hide")
    //call function to load first question
    loadQuestions();
}
 //start score
function setScore() {
    scoreEl.textContent = userScore;
}
//create timer >
function setTimer() {
    //setInterval method repeatedly executes code with a fixed delay each execution
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timeEl.textContent = secondsLeft;
        if (secondsLeft === 0) {
            //clearInterval method stops the called action set in place by setInterval method
            clearInterval(timerInterval);
        }
    }, 1000);
}
function loadQuestions() {
    var question = allQuestions[Q].text;

    quizArea.innerHTML = "";
    quizArea.innerHTML = question;
    loadAnswers();
}
function loadAnswers() {
    //var answer = allQuestions[Q].choices;
    choiceArea.innerHTML = "";
    //choiceArea.innerHTML = answer;
    for (var i = 0; i < allQuestions[Q].choices.length; i++) {
        var btn = document.createElement("button");
        btn.value = allQuestions[Q].choices[i];
        btn.className = "test"
        btn.textContent = allQuestions[Q].choices[i]
        btn.addEventListener("click", function () {
            var userChoice = this.value;
            console.log(userChoice)
            checkAnswer(userChoice)
        })

        choiceArea.appendChild(btn)
    }
    setScore();

}

function checkAnswer(choice) {
    //var i = document.querySelector(".test")

    correctAnswer = allQuestions[Q].correct;
    if (choice === correctAnswer) {
        userScore += 15000;
        //userScore + 15000;
        
    } else {
        secondsLeft -= 10
        if(secondsLeft < 0){
            secondsLeft = 0
            endGame()
        }
    }
    Q++;
    if (Q === allQuestions.length) {
        endGame()
    } else {
        loadQuestions();
    }
}

function endGame() {
    document.querySelector(".quiz").classList.add("hide");
    document.querySelector(".end").classList.remove("hide");
    document.querySelector(".yourScore").textContent= userScore

}

//on click show first question >
//append answer buttons to question >
//add event listener to answer buttons ? >
//on click check for correct answer >
//if correct add to score
//if wrong decrement timer -10 seconds
//show next question
//when out of  questions or out of time end game
//collect initials 
//save score and initials to local storage
//when user hits high scores show list of high scores
//runs start game function when the start button is clicked
document.querySelector(".start-btn").addEventListener("click", startGame);


//document.querySelector(".start-btn").addEventListener("click", loadAnswers);
//start timer
document.querySelector(".start-btn").addEventListener("click", setTimer);
