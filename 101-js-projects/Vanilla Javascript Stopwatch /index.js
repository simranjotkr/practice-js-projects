let onload = function () {
    let minutes = 00;
    let seconds = 00;
    let tens = 00;
    let docMinObj = getId("minutes");
    let docSecObj = getId("seconds");
    let docTensObj = getId("tens");
    let startButton = getId("button-start");
    let stopButton = getId("button-stop");
    let resetButton = getId("button-reset");
    let interval;

    startButton.onclick = () => {
        clearInterval(interval);
        interval = setInterval(startTimer, 10);
    }

    stopButton.onclick = () => {
        clearInterval(interval);
    }

    resetButton.onclick = () => {
        clearInterval(interval);
        tens = "00";
        seconds = "00";
        minutes = "00";
        docMinObj.innerHTML = minutes;
        docSecObj.innerHTML = seconds;
        docTensObj.innerHTML = tens;
    }

    function startTimer() {
        tens++;
        if (tens <= 9) {
            docTensObj.innerHTML = "0" + tens;
        }
        if (tens > 9) {
            docTensObj.innerHTML = tens;
        }
        if (tens > 99) {
            seconds++;
            docSecObj.innerHTML = "0" + seconds;
            tens = 0;
            docTensObj.innerHTML = "0" + tens;
        }
        if (seconds > 9) {
            docSecObj.innerHTML = seconds;
        }
        if (seconds > 59) {
            minutes++;
            docMinObj.innerHTML = "0" + minutes;
            seconds = 0;
            docSecObj.innerHTML = "0" + seconds;
        }
        if (minutes > 9) {
            docMinObj.innerHTML = minutes;
        }
        if (minutes > 59) {
            clearInterval(interval);
            startButton.onclick();
        }
    }
}

window.onload = onload;


let getId = (id) => {
    return document.getElementById(id);
}