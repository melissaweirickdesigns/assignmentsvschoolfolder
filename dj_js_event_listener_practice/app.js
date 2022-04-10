let djSquare = document.getElementById("square");
let djKeyEvent = Event.key;

djSquare.addEventListener("mouseover", blueSquare);
djSquare.addEventListener("mousedown", redSquare);
djSquare.addEventListener("mouseup", yellowSquare);
djSquare.addEventListener("dblclick", greenSquare);
window.addEventListener("wheel", orangeSquare);

function blueSquare() {
    document.append(djSquare.style.backgroundColor = 'blue');
};

function redSquare() {
    document.append(djSquare.style.backgroundColor = 'red')
};

function yellowSquare() {
    document.append(djSquare.style.backgroundColor = 'yellow')
};

function greenSquare() {
    document.append(djSquare.style.backgroundColor = 'green')
};

function orangeSquare() {
    document.append(djSquare.style.backgroundColor = 'orange')
};