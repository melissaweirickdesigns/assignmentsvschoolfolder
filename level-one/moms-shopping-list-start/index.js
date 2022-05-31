const groceryListItems = [];
const form = document["addItem"];

const addItems = form.addEventListener("submit", event => {
    event.preventDefault();
    const newItem = document.createElement("li");
    const itemName = document.createElement("div");
    const itemValue = document.getElementById("title");
    itemName.textContent = itemValue.value;
    itemName.setAttribute("id", "itemNameDiv");
    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.setAttribute("id", "editButton");
    const saveButton = document.createElement("button");
    saveButton.textContent = "Save";
    saveButton.setAttribute("id", "Save");
    saveButton.style.display = "none";
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "X";
    deleteButton.setAttribute("id", "delete");
    const groceryList = document.getElementById("list");
    groceryList.appendChild(newItem);
    newItem.appendChild(itemName);
    newItem.appendChild(editButton);
    newItem.appendChild(saveButton);
    newItem.appendChild(deleteButton);
    groceryListItems.push(itemName.textContent);
    const groceryItem = document.getElementById("list");
    const myJSON = JSON.stringify(groceryListItems);
    localStorage.setItem("NewGroceryItem", myJSON);
    itemValue.value = "";
    deleteButton.addEventListener("click", event => {
        event.target.parentNode.remove();
        localStorage.removeItem(event.target.parentNode);
    });

    function editButtonEvent(event) {
        console.log(localStorage);
        saveButton.style.display = "block";
        let editField = document.createElement("input");
        editField.setAttribute("id", "inputFieldID")
        editField.value = event.target.parentNode.childNodes[0].textContent;
        event.target.parentNode.appendChild(editField);
        saveButton.addEventListener("click", (event) => saveButtonEvent(event, editField));
        editButton.style.display = "none";    
    };
    function saveButtonEvent(event, editField) {
        console.log(event.target);
        editField.style.display = "none";
        const NewItemName = event.target.parentNode.childNodes[0];
        NewItemName.textContent = editField.value;
        editButton.style.display = "block";
        saveButton.style.display = "none";
    };
    editButton.addEventListener("click", editButtonEvent); 
    });