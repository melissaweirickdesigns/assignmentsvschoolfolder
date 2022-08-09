const readline = require("readline-sync");

//1. let and const

const name = "John"
const age = 101

function runForLoop(pets) {
    let petObjects = [];
    let pet = "";
    let name = "";
    for (let i = 0; i < pets.length; i++) {
        pet = { type: pets[i] };        
        if (pets[i] === "cat") {
            name = "fluffy"
        } else {
            name = "spot"
        }
        console.log("pet name: ", name)
        pet.name = name
        petObjects.push(pet)
    }
    return petObjects
}

runForLoop(["cat", "dog"]);
console.log("man name: ", name);

//2. Task 1

const carrots = ["bright orange", "ripe", "rotten"];

function mapVegetables(arr) {
    return arr.map(carrot => {
        return { type: "carrot", name: carrot }
    });
};

console.log(mapVegetables(carrots));

//3. Task 2

const people = [
    {
        name: "Princess Peach",
        friendly: false
    },
    {
        name: "Luigi",
        friendly: true
    },
    {
        name: "Mario",
        friendly: true
    },
    {
        name: "Bowser",
        friendly: false
    }
]

function filterForFriendly(arr) {
    return arr.filter(person => {
        return person.friendly
    });
};

console.log(filterForFriendly(people));

//4. Task 3

let doMathSum = (a, b) => a + b;

console.log(doMathSum(4, 3));

let produceProduct = (a, b) => a * b;

console.log(produceProduct(4, 3));

//5. Task 4

const identity = {
    firstName: "Melissa",
    lastName: "Weirick",
    age: 34,
};

let identitySentence = (object) => `Hi ${object.firstName} ${object.lastName}, how does it feel to be ${object.age}?`

console.log(identitySentence(identity));

//6. Task 5

const animals = [
    {
        type: "dog",
        name: "theodore"
    },
    {
        type: "cat",
        name: "whiskers"
    },
    {
        type: "pig",
        name: "piglette"
    },
    {
        type: "dog",
        name: "sparky"
    }
 ];
 
 function filterForDogs(arr) {
    return arr.filter(animal => (animal.type === "dog") ? true : false)
};

 console.log(filterForDogs(animals));

 //7. Template Lierals

 const vacation = {
    name: "Janice",
    location: "Hawaii"
};

let vacationSentence = (object) => ` Hi ${object.name}! \n \n Welcome to ${object.location}. \n \n I hope you enjoy your stay. Please ask the president of ${object.location} if you need anything.`

console.log(vacationSentence(vacation));