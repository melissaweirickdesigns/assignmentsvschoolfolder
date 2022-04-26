let headerTitle = document.getElementById("header");
headerTitle.classList.add('header');
headerTitle.textContent = 'JavaScript Made This!!';
headerTitle.style.fontSize = '20px';
headerTitle.style.fontWeight = 'bolder';

const subTitle = document.createElement("h2");
subTitle.innerHTML = 'wrote this Javascript';
headerTitle.insertAdjacentElement("afterend", subTitle);
subTitle.style.fontSize = '10px';
subTitle.style.textAlign ='center';

const subTitleAuthor = document.createElement("span");
subTitleAuthor.classList.add('name');
subTitleAuthor.textContent = 'Melissa Weirick ';
subTitle.prepend(subTitleAuthor);
subTitle.style.fontWeight = 'bolder';

const messages = document.querySelector('.messages');
messages.setAttribute('id', 'messages');

const clearAllMessages = document.getElementById("clear-button");
clearAllMessages.addEventListener("click", clearMessages);

function clearMessages(){
    document.getElementById("messages").innerHTML = "";
};

const message = document.getElementsByClassName("message");

message[0].textContent = "HELP! I have been involved in a Robbery!";
message[1].textContent = "I think you have the wrong number, call 911!";
message[2].textContent = "No! I need to find shelter from the police";
message[3].textContent = "This is Batman...";

let dropDown = document.getElementById("theme-drop-down");

function changeTheme() {
    let selectedOption = dropDown.value;
    let rightMessage = document.styleSheets[0].cssRules[5].style;
    let leftMessage = document.styleSheets[0].cssRules[6].style;
    if ( selectedOption === "theme-one"){
        rightMessage.backgroundColor = "#b35900";
        leftMessage.backgroundColor = "#99ebff";
    }if ( selectedOption === "theme-two"){
        rightMessage.backgroundColor = "#808080"; 
        leftMessage.backgroundColor = "#e62e00";
    }if ( selectedOption === "theme-three"){
        rightMessage.backgroundColor = "#00cc00";
        leftMessage.backgroundColor = "#ffad33";
    }if ( selectedOption === "theme-four"){
        rightMessage.backgroundColor = "#ffff1a";
        leftMessage.backgroundColor = "#a64dff";
    };
};

dropDown.addEventListener("change", changeTheme);

let sendMessage = document.getElementById("sendButton");
let newMessage = document.getElementById("input");
let toggleDiv = "right";


function addMessage() {
    event.preventDefault();
    let newThread = document.createElement('div');
    newThread.classList.add('message');
    if (toggleDiv === "right") {
        newThread.classList.add('left');
        toggleDiv = "left";
    }else{
        newThread.classList.add('right');
        toggleDiv = "right";
    };
    newThread.textContent = newMessage.value;
    let addMessageDiv = document.getElementById("messages");
    addMessageDiv.appendChild(newThread);
    newMessage.value = "";
};

sendMessage.addEventListener("click", addMessage);