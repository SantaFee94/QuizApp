let currentQuestion = 0;

function init() {
    document.getElementById("allQuestions").innerHTML = questions.length;

    showQuestion();
}

function showQuestion() {
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

    if (selected == questions[currentQuestion].correct) {
        answerBox.classList.add("correct_answer");
    } else {
        answerBox.classList.add("in_correct_answer");
    }
}

function nextQuestion() {
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        showQuestion();
    } else {
        console.log("Quiz beendet.");
    }
}
