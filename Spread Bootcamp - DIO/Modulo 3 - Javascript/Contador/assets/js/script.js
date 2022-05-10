var currentNumberWrapper = document.getElementById("currentNumber");
var currentNumber = 0;

function increment() {
    if (currentNumber >= 10) {
        currentNumber = 10;
        currentNumberWrapper.innerHTML = currentNumber;
    } else {
        currentNumber = currentNumber + 1;
        currentNumberWrapper.innerHTML = currentNumber;
    }
}

function decrement() {
    if (currentNumber <= 0) {
        currentNumber = 0;
        currentNumberWrapper.innerHTML = currentNumber;
    } else {
        currentNumber = currentNumber - 1;
        currentNumberWrapper.innerHTML = currentNumber;
    }
}

function reset() {
    currentNumber = 0;
    currentNumberWrapper.innerHTML = currentNumber;
}
