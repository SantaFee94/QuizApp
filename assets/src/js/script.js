let currentQuestion = 0;
let rightQuestion = 0;

function init() {
    document.getElementById("allQuestions").innerHTML = questions.length;
    document.getElementById("allAmountQuestion").innerHTML = questions.length;
    showQuestion();
}

function showQuestion() {
    statusProgressBar()
    let currentlyQuestion = currentQuestion + 1;
    let question = questions[currentQuestion];
    let answerRef = document.getElementById("answerContainer");
    document.getElementById("currentQuestion").innerHTML = currentlyQuestion;
    document.getElementById("questionText").innerHTML = question["question"];
    answerRef.innerHTML = "";

    for (let index = 0; index < questions[currentQuestion].answers.length; index++) {
        answerRef.innerHTML += questionAndAnswerToHtml(index);
    }
}

function answer(selected) {
    let answerBox = document.getElementById(`answer${selected}`);
    let correctAnswerBox = document.getElementById(`answer${questions[currentQuestion].correct}`);
    

    if (selected == questions[currentQuestion].correct) {
        answerBox.classList.add("correct_answer");
        rightQuestion++;
    } else {
        answerBox.classList.add("in_correct_answer");
        correctAnswerBox.classList.add("correct_answer");
    }
    document.getElementById("nextQuestionButton").disabled = false;
}

function nextQuestion() {
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        showQuestion();
    } else {
        overlayShow("overlay", "show");
    }
    document.getElementById("nextQuestionButton").disabled = true;
}
