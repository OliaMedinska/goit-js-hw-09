const btnStart = document.querySelector('[data-start]');
const btnStop = document.querySelector('[data-stop]');
const body = document.body;
const DELAY = 1000;
let timerId = null;

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`
};

btnStart.addEventListener('click', () => {
    timerId = setInterval(() => {
        body.style.background = getRandomHexColor();
    }, DELAY);
    btnStart.disabled = true
});

btnStop.addEventListener('click', () => {
    clearInterval(timerId);
    btnStart.disabled = false
});