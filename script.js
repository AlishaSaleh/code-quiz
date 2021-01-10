var startPg = document.querySelector(".start");
var startTxt = document.querySelector(".start-page");
var startBtn = document.querySelector(".startBtn");
var quizPg = document.querySelector(".quizQs");
var qQuestion = document.querySelector(".quiz-question");
var qAnswers = document.querySelector(".quiz-answers");
var qAlert = document.querySelector(".quiz-alert");
var nxtQuestion = {};

var endPg = document.querySelector(".end-quiz");
var endMsg = document.querySelector(".finish");
// var scoreBtn = document.querySelector(".my-score");

var timerScore = document.getElementById("timer");

var strtCount = 60;
var score = 0;
var currentQue = 0;
// var questCount =0;
// var i = 0;


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
    // questCount = 0;



    // startPg.style.display = "none";
    // startpg.remove();
    playQuiz(nxtQuestion);
    timer();

}

function playQuiz(arr) {
    // qQuestion.innerText = arr.question;
    // var currentQue = 0;


    // qQuestion.innerText = arr[currentQue].question;
    qQuestion.innerText = arr.question;

    arr.answers.forEach(element => {
        var subAns = document.createElement("button");
        subAns.className = "btn btn-primary";
        subAns.innerText = element;
        qAnswers.appendChild(subAns);
        subAns.addEventListener("click", disNxtQues);
    })


    //     function createButt (item) {
    //     var subAns = document.createElement("button");
    //         subAns.className = "btn btn-primary";
    //         subAns.innerText = item;
    //         qAnswers.appendChild(subAns);
    // }
    // createButt();

    // creates answer buttons
    // var ans = arr[currentQue].answers;
    // ans.forEach(function (item) {
    //     var subAns = document.createElement("button");
    //     subAns.className = "btn btn-primary";
    //     subAns.innerText = item;
    //     qAnswers.appendChild(subAns);
    //     subAns.addEventListener("click", disNxtQues);

    // });
    //     currentQue++
    //     var corAns = arr[currentQue].correctAnswer;
    //     if (currentQuestion < arr.length) {

    //         response(user.target.innerText === corAns);
    //         qAnswers.innerHTML = "";

    //         if (currentQuestion < arr.length) {
    //             nxtQuestion = arr[currentQue];
    //             playQuiz(myQuestions);
    //         } else {
    //             currentQuestion = 0;
    //             playQuiz(myQuestions);
    //         }
    //     } else {
    //         showResults();
    //     };
}

function disNxtQues(evt) {
    // questCount++

    currentQue++

    // nxtQuestion = myQuestions[currentQue];
    // var j = 0;
    // var corAns = myQuestions[j].correctAnswer;


    if (currentQue < myQuestions.length) {
        response(evt.target.innerText === nxtQuestion.correctAnswer);
        qAnswers.innerHTML = "";
        // qQuestion.innerText = myQuestions[currentQue]

        if (currentQue < myQuestions.length) {
            // qQuestion.innerText = myQuestions[currentQue];
            nxtQuestion = myQuestions[currentQue];
            console.log(myQuestions[currentQue])
            playQuiz(nxtQuestion);
        } else {
            // qQuestion.innerText = myQuestions[currentQue];
            currentQue = 0;
            playQuiz(nxtQuestion);
        }
    } else {
        showResults();
    };
};

// evt.target.style.visibility = "hidden";
// quizPg.classList.add("d-none");
// };

// // timer function -- now works from startbtn click
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

// checks whether user clicks right or wrong answer and 
// deducts 5 seconds from time remaining for incorrect answer
function response(user) {
    if (user) {
        qAlert.textContent = "Correct!";
    } else {
        qAlert.textContent = "Wrong!";
        strtCount = strtCount - 5;
        timerScore.innerHTML = strtCount;
    };
};


function showResults() { 
    endMsg.innerText = "Your score is: " + strtCount;
    quizPg.remove();
    timerScore.remove();

};
// scoreBtn.addEventListener("click", showResults);

// startBtn.addEventListener("click", playQuiz(myQuestions));

