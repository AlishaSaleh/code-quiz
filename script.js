var startPg = document.querySelector(".start");
var startTxt = document.querySelector(".start-page");
var startBtn = document.querySelector(".startBtn");
var quizPg = document.querySelector(".quizQs");
var qQuestion = document.querySelector(".quiz-question");
var qAnswers = document.querySelector(".quiz-answers");
var qAlert = document.querySelector(".quiz-alert");
var nxtQuestion;

var endPg = document.querySelector(".end-quiz");
var endMsg = document.querySelector(".finish");
var scoreBtn = document.querySelector(".my-score");

var timerScore = document.getElementById("timer");

var strtCount = 60;
var score = 0;
var currentQue = 0;
var i = 0;


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

startBtn.addEventListener("click", startQuiz);

function startQuiz() {
    startPg.classList.add("d-none");
    quizPg.classList.remove("d-none");
    nxtQuestion = myQuestions[currentQue];


    // startPg.style.display = "none";
    // startpg.remove();
    playQuiz(myQuestions);
    timer();

}

function playQuiz(arr) {
    // qQuestion.innerText = arr.question;
    var i = 0;

    qQuestion.textContent = arr[i].question;

    // var ans = arr.answers;
    // ans.forEach(ansCre);

    // function ansCre (item) {
    //     var subAns = document.createElement("button");
    //     subAns.textContent = item;
    //     qAnswers.appendChild(subAns);
    // }

    //     function createButt (item) {
    //     var subAns = document.createElement("button");
    //         subAns.className = "btn btn-primary";
    //         subAns.innerText = item;
    //         qAnswers.appendChild(subAns);
    // }
    // createButt();

    var ans = arr[i].answers;
    ans.forEach(function (item) {
        var subAns = document.createElement("button");
        subAns.className = "btn btn-primary";
        subAns.innerText = item;
        qAnswers.appendChild(subAns);
        subAns.addEventListener("click", disNxtQues);

    });
};

function disNxtQues(evt) {
    // evt.target.style.visibility = "hidden";
    // quizPg.classList.add("d-none");
    currentQue++
    var i = 0;
    var corAns = myQuestions[i].correctAnswer;
    if (currentQue < myQuestions.length) {
        
        response(evt.target.innerText === corAns);
        qAnswers.innerHTML = "";

        if (currentQue < myQuestions.length) {
            nxtQuestion = myQuestions[currentQue];
            playQuiz(myQuestions);
        } else {
            currentQue = 0;
            playQuiz(myQuestions);
        }
    } else {
        showResults();
    };
};


// timer function -- now works from startbtn click
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

function response(user) {
    if (user) {
        qAlert.textContent = "Correct!";
    } else {
        qAlert.textContent = "Wrong!";
        strtCount = strtCount - 5;
        timerScore.innerHTML = strtCount;
    };
};


function showResults() { };
// scoreBtn.addEventListener("click", showResults);

// startBtn.addEventListener("click", playQuiz(myQuestions));


