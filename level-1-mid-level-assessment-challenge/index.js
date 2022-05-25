//Write an event listener to the Change-Color Button that when clicked will change the font color of the Header div from "black" to "blue". (Assume the default color of Header is "black") (it does not need to toggle between black and blue, but it's optional)
const button = document.getElementById("button");
button.addEventListener("click", blueColor);
function blueColor() {
    const header = document.getElementById("header");
    header.style.color = "blue";
};

