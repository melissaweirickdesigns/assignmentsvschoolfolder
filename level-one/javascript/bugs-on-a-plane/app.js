var form = document.getElementById("airline-form");
var submit = document.getElementById("submit");
var diet = [];

console.log(diet);

function formAlert() {
    var firstName = form.elements["first-name"].value;
    var lastName = form.elements["last-name"].value;
    var age = form.elements["age"].value;
    var gender = form.elements["gender"].value;
    var location = form.elements["travel-location"].value;
    if (form.elements["vegan"].checked === "true") {
        diet.push("Vegan");
        console.log(form.elements["vegan"]);
    } else if (form.elements["gluten"].checked === "true") {
        diet.push("Gluten");
        console.log(diet);
    } else if (form.elements["paleo"].checked === "true") {
        diet.push("Paleo");
        console.log(diet);
    }

    alert("First Name: " + firstName + "\nLast Name: " + lastName + "\nAge: " + age + "\nGender: " + gender + "\nTravel Location: " + location + "\nDiet: " + diet + "\nAwesome, now if you die, it won't be an accident..");
}

submit.addEventListener("click", formAlert);