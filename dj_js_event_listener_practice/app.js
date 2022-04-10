let djSquare = document.getElementById("square");
djSquare.addEventListener("mouseover", blueSquare);
djSquare.addEventListener("mousedown", redSquare);
djSquare.addEventListener("mouseup", yellowSquare);
djSquare.addEventListener("dblclick", greenSquare);
window.addEventListener("scroll", orangeSquare);

function blueSquare() {
    document.append(djSquare.style.backgroundColor = 'blue')
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
    document.djSquare.append(djSquare.style.backgroundColor = 'orange')
};