function overlayShow(contentId, classList) {
    document.getElementById(contentId).classList.add(classList);
}

function closeOverlay(contentId, classList) {
    document.getElementById(contentId).classList.remove(classList);

    currentQuestion = 0;
    
    showQuestion();
}

function overlayShowEvaluation(contentId, classList) {
    document.getElementById(contentId).classList.add(classList);
    document.getElementById("amountOfRightQuestion").innerHTML = rightQuestion;
}

function closeOverlayAndRestartQuiz(contentId, contentId1, classList) {
    document.getElementById(contentId).classList.remove(classList);
    document.getElementById(contentId1).classList.remove(classList);
    
    currentQuestion = 0;
    
    showQuestion();
}
