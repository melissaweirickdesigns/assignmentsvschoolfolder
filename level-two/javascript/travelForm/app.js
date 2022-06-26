

const form = document.passengerOne;
const newLine = "\r\n"
let dietRestrictions = [];
let passengerInfo = new Object();

form.addEventListener('submit', (e) => {
    e.preventDefault();
    passengerInfo.FirstName = form.fName.value;
    passengerInfo.LastName = form.lName.value;
    passengerInfo.Age = form.age.value;
    passengerInfo.Gender = form.gender.value;
    passengerInfo.Location = form.destination.value;
    for (i=0; i<form.diet.length; i++) {
        if (form.diet[i].checked) {
            dietRestrictions.push(form.diet[i].value);
        };
    };
    passengerInfo.DietRestrictions = dietRestrictions;
    console.log(passengerInfo);   
    alert("First name: " + form.fName.value + newLine + "Last name: " + form.lName.value + newLine + "Age: " +  form.age.value + newLine + "Gender: " + form.gender.value + newLine + "Location: " + form.destination.value + newLine + "Dietary restrictions: " + dietRestrictions.toString())
    form.fName.value = "";
    form.lName.value = "";
    form.age.value = "";
    form.destination.selectedIndex = -1;
    for (i=0; i<form.gender.length; i++) {
        form.gender[i].checked = false;
    };
    form.destination.value = "";
    for (i=0; i<form.diet.length; i++) {
        form.diet[i].checked = false;
    };
});