function questionAndAnswerToHtml(index) {
    return `<div class="card mb-2 answer">
                        <div onclick="answer(${index})" class="card-body quiz_answer_card" id="answer${index}">${questions[currentQuestion].answers[index]}</div>
                    </div>`;
}
