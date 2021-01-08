var startPg = document.querySelector(".start")
var startTxt = document.querySelector(".start-page");
var startBtn = document.querySelector(".startBtn");
var quizPg = document.querySelector(".quizQs");
var qQuestion = document.querySelector(".quiz-question");
var qAnswers = document.querySelector(".quiz-answers");

var endPg = document.querySelector(".end-quiz");
var endMsg = document.querySelector(".finish");
var scoreBtn = document.querySelector(".my-score");

var timerScore = document.getElementById("timer");

var strtCount = 60;
var score = 0;
var currentQue = 0;

var myQuestions = [
    {
        question: "What must arrays be enclosed by?",
        answers: ["Curly brackets", "Square brackets", "Hastags", "Dollar signs"],
        correctAnswer: "Square brackets"
    },
    {
        question: "Which one of these is NOT a datatype?",
        answers: ["String", "Boolean", "Integer", "For loop"],
        correctAnswer: "For loop"
    },
    {
        question: "Which one of these simplifies JavaScript?",
        answers: ["Bootstrap", "Chrome DevTools", "jQuery", "Python"],
        correctAnswer: "jQuery"
    },
    {
        question: "What should 'if/else' statements be enclosed in?",
        answers: ["Curly brackets", "Square brackets", "Hastags", "Dollar signs"],
        correctAnswer: "Curly brackets"
    },
    {
        question: "Which one of these can be used for debugging?",
        answers: ["Bootstrap", "Chrome DevTools", "jQuery", "Python"],
        correctAnswer: "Chrome DevTools"
    },
];

startBtn.addEventListener("click", startQuiz());

function startQuiz() {
    // startPg.style.display = "none";
    // startpg.remove();
    playQuiz(myQuestions);
    timer();

}

function playQuiz(arr) {

    // myQuestions.forEach

    

    for (var i = 0; i < arr.length; i++) {
        var que = qQuestion.textContent;
        que = arr[i].question;


    };

};


// timer function -- will it work once its included in the playQuiz function??
// currently working from page load
function timer() {
    //always clear interval
    var interval = setInterval(function () {

        timerScore.textContent = strtCount;
        strtCount--;
        if (strtCount === 0) {
            clearInterval(interval);
        };

    }, 1000);
}

function showResults() { };
// scoreBtn.addEventListener("click", showResults);

// startBtn.addEventListener("click", playQuiz(myQuestions));


