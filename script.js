
//create objects with an array of keys to be called by index
var allQuestions = [
    { text: "Which is used to create an array?", choices: ["< >", "( )", "[ ]", "{ }"], correct: "[ ]" },
    { text: "Inside which HTML element can we embed Javascript?", choices: ["<body>", "<javascript>", "<head>", "<script>"], correct: "<script>" },
    { text: "How is data stored in an Object?", choices: ["Variables and Values", "Keys and Values", "Views and Likes", "Push and Splice"], correct: "Keys and Values" },
    { text: "Which of these can be used to call a Javascript code snippet", choices: ["Process", "Triggering Event", "Function/Method", "Variable"], correct: "Function/Method" },
    { text: "What is the index number of the first value in an array?", choices: ["one", "1", "2", "0"], correct: "0" },
    { text: "What data type is 'this is a boolean' ?", choices: ["String", "Array", "Boolean", "Object"], correct: "String" },
];
//variable to iterate through questions
var Q = 0;
//variable to target span tag for timer
var timeEl = document.querySelector(".timer");
//variable used to decrease time

//variable to target players score
var scoreEl = document.querySelector(".score");
var secondsLeft = 60;
var quizArea = document.querySelector(".qSpot");
var choiceArea = document.querySelector(".cSpot");
var userScore = 0;
var yourScore = document.querySelector(".yourScore");
var scoreBoard = document.querySelector(".highScore");
var initScore;
var savedScore;
var timerInterval;
var localScores = [];

function init() {
    
    localScores = JSON.parse(localStorage.getItem("scoreObj"));

    if (localScores === null) {
    localScores = [];
     }
}

function startGame() {
    // hides start screen >
    document.querySelector(".start").classList.add("hide");
    //show quiz screen >
    document.querySelector(".quiz").classList.remove("hide");
    //call function to load first question
    document.querySelector(".end").classList.add("hide");

    document.querySelector(".leader").classList.add("hide");
    document.querySelector(".highScore").classList.add("hide");

    loadQuestions();
}
//start score
function setScore() {
    scoreEl.textContent = userScore;
}
//create timer >
function setTimer() {
    //setInterval method repeatedly executes code with a fixed delay each execution
    timerInterval = setInterval(function () {
        secondsLeft--;
        timeEl.textContent = secondsLeft;
        if (secondsLeft <= 0) {
            //clearInterval method stops the called action set in place by setInterval method
            clearInterval(timerInterval)
            endGame();
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
    choiceArea.innerHTML = "";
    for (var i = 0; i < allQuestions[Q].choices.length; i++) {
        var btn = document.createElement("button");
        btn.value = allQuestions[Q].choices[i];
        btn.className = "test"
        btn.textContent = allQuestions[Q].choices[i]
        btn.addEventListener("click", function () {
            var userChoice = this.value;
            checkAnswer(userChoice)
        })

        choiceArea.appendChild(btn)
    }
    setScore();

}

function checkAnswer(choice) {
    correctAnswer = allQuestions[Q].correct;
    if (choice === correctAnswer) {
        userScore += 15075;
    } else {
        secondsLeft -= 10
    }
    Q++;
    if (Q === allQuestions.length) {
        endGame();
    } else {
        loadQuestions();
    }
}


function namePrompt() {

    var names = prompt("Please enter your Name:");
    if (names == null || names == "") {
        alert("Don't be ashamed!");
    } else {
        initScore = { name: names, score: userScore };
        localScores.push(initScore)
        localStorage.setItem("scoreObj", JSON.stringify(localScores));
    }
}

function endGame() {
    document.querySelector(".quiz").classList.add("hide");
    document.querySelector(".end").classList.remove("hide");
    document.querySelector(".yourScore").textContent = userScore;
    namePrompt();
    clearInterval(timerInterval);
}
function roundTwo() {
    Q = 0;
    secondsLeft = 60;
    userScore = 0;
    startGame();
    setTimer();
}

function showHigh() {
    if (".leader hide") {
        document.querySelector(".leader").classList.remove("hide");
    }
     if(".highScore hide"){
        document.querySelector(".highScore").classList.remove("hide");
    }
    scoreBoard.textContent = ""
    var newHigh = JSON.parse(localStorage.getItem('scoreObj'));
    console.log(newHigh)
    for (i = 0; i < newHigh.length; i++) {

        var scoreList = document.createElement("li");
        scoreList.innerHTML = newHigh[i].name + ": " + newHigh[i].score;
        scoreBoard.appendChild(scoreList);
    }
   
}


//runs start game function when the start button is clicked
document.querySelector(".start-btn").addEventListener("click", startGame);
document.querySelector(".again").addEventListener("click", roundTwo);
//document.querySelector(".start-btn").addEventListener("click", loadAnswers);
//start timer
document.querySelector(".start-btn").addEventListener("click", setTimer);
document.querySelector(".high").addEventListener("click", showHigh);
init();