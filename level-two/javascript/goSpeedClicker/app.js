// const readline = require("readline-sync");

const clickMe = document.getElementById("clickMe");
let totalClicks = document.getElementById("totalClicks");

function totalClicksDisplay() {
    totalClicks.textContent = localStorage.getItem("totalClicksStorage");
};

totalClicksDisplay();

clickMe.addEventListener('click', (e) => {
    totalClicksNewTotal = Math.floor(Number(totalClicks.textContent) + Number(1));
    localStorage.setItem("totalClicksStorage", totalClicksNewTotal);
    totalClicksDisplay();
});

