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

const messagesID = document.getElementsByClassName("#messages");
messagesID.attr("id", "messagesID");
console.log(document.getElementById("messages").id);








