const $hrsBtn = document.querySelector("#hrs");
const $minBtn = document.querySelector("#min");
const $secBtn = document.querySelector("#sec");

const $startBtn = document.querySelector("#start");
const $resetBtn = document.querySelector("#reset");

let timer = null;

let hrs = Number($hrsBtn.value);
let min = Number($minBtn.value);
let sec = Number($secBtn.value);

function increaseHrs() {
    $hrsBtn.value = hrs + 10;
}
function increaseMin() {
    $minBtn.value = min + 10;
}
function increaseSec() {
    $secBtn.value = sec + 10;
}

let totalSeconds = hrs * 3600 + min * 60 + sec;

timer = setInterval(() => {
    value--;
    if (totalSeconds === 0) {
        clearInterval(timer);
        timer = null;
        return;
    }

    totalSeconds--;
}, 1000);

function reset() {
    clearInterval(timer);
    $hrsBtn.value = "00";
    $minBtn.value = "00";
    $secBtn.value = "00";
}
