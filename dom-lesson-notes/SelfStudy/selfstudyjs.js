const consoleLogButton = document.getElementById("inputButton");
const consoleLogButtonHTML = document.getElementById("inputTask");
consoleLogButton.addEventListener("click", sendText);

function sendText() {
    console.log(consoleLogButtonHTML.value);
    document.body.append(consoleLogButtonHTML.value);
};
