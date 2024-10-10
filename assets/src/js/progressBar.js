function statusProgressBar() {
    let percent = Math.round(currentQuestion + 1) / questions.length;
    percent = Math.round(percent * 100);

    document.getElementById("progressBar").innerHTML = `${percent}%`;
    document.getElementById("progressBar").style.width = `${percent}%`;
}
