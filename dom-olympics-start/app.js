let headerTitle = document.getElementById("header");
headerTitle.textContent = 'JavaScript Made This!!';
headerTitle.style.fontSize = '40px';

const headerOneStyles = {
    textAlign: 'center',
    fontWeight: 'bold',
    margin: '2% 0% 2% 0%',
};

Object.assign(headerTitle.style, headerOneStyles);

const subTitle = document.createElement("h2");
subTitle.classList.add("centerBold");
subTitle.textContent = ' wrote this Javascript';
headerTitle.insertAdjacentElement("afterend", subTitle);
subTitle.style.fontSize = '20px';

const subTitleAuthor = document.createElement("span");
subTitleAuthor.textContent = 'Melissa Weirick';
subTitle.insertAdjacentElement("afterbegin", subTitleAuthor);
subTitleAuthor.style.color = "red";

const subTitleStyles = {
    textAlign: 'center',
    fontWeight: 'bold',
    margin: '1% 0% 3% 0%',
}

Object.assign(subTitle.style, subTitleStyles);

const parentMessageContent = document.getElementsByClassName("messages");
const childMessageContent = document.getElementsByClassName("message");

function eraseContent() {
    parentMessageContent.removeChild(childMessageContent);
};

const clearButton = document.getElementById("clear-button").addEventListener("click", eraseContent);