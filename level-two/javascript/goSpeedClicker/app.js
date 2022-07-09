// const readline = require("readline-sync");

const clickMe = document.getElementById("clickMe");
const reset = document.getElementById("reset");
const start = document.getElementById("start");
let count = document.getElementById("count");
let totalClicks = document.getElementById("totalClicks");
clickMe.disabled = true;
let timerActivated = false;

function totalClicksDisplay() {
    if (localStorage.getItem("startDisabled") === "true") {
        start.disabled = true; 
    } else {
        start.disabled = false;
    }
    totalClicks.textContent = localStorage.getItem("totalClicksStorage");
};

totalClicksDisplay();

function startTimer() {
    let timerCountDown = 10;
    setInterval(function() {
    timerCountDown--;
      if (timerCountDown >= 0) {
        count.textContent = timerCountDown;
      }
      if (timerCountDown === 0) {
          gameOver();
      }
    }, 1000);
};

function gameOver() {
    clickMe.disabled = true;
};

clickMe.addEventListener('click', (e) => {
    totalClicksNewTotal = Math.floor(Number(totalClicks.textContent) + Number(1));
    localStorage.setItem("totalClicksStorage", totalClicksNewTotal);
    totalClicksDisplay();
});

reset.addEventListener('click', (e) => {
    totalClicksNewTotal = "0";
    localStorage.setItem("totalClicksStorage", totalClicksNewTotal);
    localStorage.setItem("startDisabled", "false");
    totalClicksDisplay();
    clickMe.disabled = true;
    count.textContent = 10;
    timerCountDown = 10;
    start.disabled = false;
    timerActivated = false;
});


start.addEventListener('click', (e) => {
    clickMe.disabled = false;
    start.disabled = true;
    localStorage.setItem("startDisabled", "true");
    startTimer();
});




