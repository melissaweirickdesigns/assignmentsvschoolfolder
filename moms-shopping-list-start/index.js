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
    editButton.setAttribute("id", "edit");
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "X";
    deleteButton.setAttribute("id", "delete");
    const groceryList = document.getElementById("list");
    groceryList.appendChild(newItem);
    newItem.appendChild(itemName);
    newItem.appendChild(editButton);
    newItem.appendChild(deleteButton);
    const groceryItem = document.getElementById("list");
    const myJSON = JSON.stringify(groceryItem);
    localStorage.setItem("NewGroceryItem", myJSON);
    itemValue.value = "";
    deleteButton.addEventListener("click", event => {
        event.target.parentNode.remove();
        localStorage.removeItem(event.target.parentNode);
    });
    
    function editButtonEvent(event) {
        console.log(localStorage);
        const editField = document.createElement("input");
        editField.setAttribute("id", "inputFieldID")
        editField.value = event.target.parentNode.childNodes[0].textContent;
        event.target.parentNode.appendChild(editField);
        event.target.textContent = "save";
        event.target.setAttribute("id", "saveButton");
        const saveButton = event.target;
        function saveButtonEvent(event) {
            const NewItemName = event.target.parentNode.childNodes[0];
            const removeInputField = event.target.parentNode.childNodes[3];
            const removeInputFieldTwo = event.target.parentNode.childNodes[4];
            NewItemName.textContent = editField.value;
            event.target.parentNode.removeChild(removeInputField);
            event.target.parentNode.removeChild(removeInputFieldTwo);
            event.target.textContent = "Edit";
            event.target.setAttribute("id", "editButton");   
        };
        saveButton.addEventListener("click", saveButtonEvent);  
    };
    
    editButton.addEventListener("click", editButtonEvent); 
    
});