let djSquare = document.getElementById("square");

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

document.addEventListener('keypress', function (event) {
    if (event.key === 'b') {
        djSquare.style.backgroundColor = 'blue';
    }
    if (event.key === 'r') {
        djSquare.style.backgroundColor = 'red';
    }
    if (event.key === 'y') {
        djSquare.style.backgroundColor = 'yellow';
    }
    if (event.key === 'g') {
        djSquare.style.backgroundColor = 'green';
    }
    if (event.key === 'o') {
        djSquare.style.backgroundColor = 'orange';
    }
});