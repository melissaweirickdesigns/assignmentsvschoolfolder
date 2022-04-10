let djSquare = document.getElementById("square");
let djKeyEvent = Event.key;

djSquare.addEventListener("mouseover", blueSquare);
djSquare.addEventListener("mousedown", redSquare);
djSquare.addEventListener("mouseup", yellowSquare);
djSquare.addEventListener("dblclick", greenSquare);
window.addEventListener("wheel", orangeSquare);

function blueSquare() {
    djSquare.style.backgroundColor = 'blue'
};

function redSquare() {
    djSquare.style.backgroundColor = 'red'
};

function yellowSquare() {
    djSquare.style.backgroundColor = 'yellow'
};

function greenSquare() {
    djSquare.style.backgroundColor = 'green'
};

function orangeSquare() {
    djSquare.style.backgroundColor = 'orange'
};