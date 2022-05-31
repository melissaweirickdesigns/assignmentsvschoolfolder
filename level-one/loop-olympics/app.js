const readline = require("readline-sync");

let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const fruit = ["banana", "orange", "apple", "kiwi"]

//preliminaries

//1.

for (let i=0; i < numbers.length; i++) {
    console.log(numbers[i]);
};

//2.

for (let i = numbers.length - 1; i >= 0; i--) {
    console.log(numbers[i]);
};

//3.

for (let i = 0; i < fruit.length; i++) {
    console.log(fruit[i]);
};

//Bronze Medal

//1. 

let newestNumbers = [];
for (let i = 0; i < numbers.length; i++) {
    newestNumbers.push(numbers[i]);
};

console.log(newestNumbers);

//2.

for (let i=0; i <= 100; i++) {
    if (i%2 == 0) {
        console.log(i);
    };
};

//3. 

const fruitList = ["banana", "orange", "apple", "kiwi", "pear", "peach"]
let newFruitList = [];
for (let i = 0; i < fruitList.length; i += 2) {
    newFruitList.push(fruitList[i]);
};

console.log(newFruitList);

//silver medal

const peopleArray = [
    {
      name: "Harrison Ford",
      occupation: "Actor"
    },
    {
      name: "Justin Bieber",
      occupation: "Singer"
    },
    {
      name: "Vladimir Putin",
      occupation: "Politician"
    },
    {
      name: "Oprah",
      occupation: "Entertainer"
    }
  ];  

//1.

for (let i = 0; i < peopleArray.length; i++) {
    console.log(peopleArray[i].name);
}

//2. 

let namesArray = [];
let occupationArray = [];
for (let i = 0; i < peopleArray.length; i++) {
    namesArray.push(peopleArray[i].name);
    occupationArray.push(peopleArray[i].occupation);
};

console.log(namesArray);
console.log(occupationArray);

//3. 

let everyOtherNameArray = [];
let everyOtherOccupationArray = [];
for (let i = 0; i < peopleArray.length; i += 2) {
    everyOtherNameArray.push(peopleArray[i].name);
};
for (let i = 1; i < peopleArray.length; i += 2) {
    everyOtherOccupationArray.push(peopleArray[i].occupation);
};

console.log(everyOtherNameArray);
console.log(everyOtherOccupationArray);

//Gold Medal (https://scrimba.com/scrim/cLk2qeU6)

//1. 
let numberZeroArray = [];
for (let i = 0; i < 3; i++) {
    numberZeroArray.push( [] );
    for (let j = 0; j < 3; j++) {
        numberZeroArray[i][j] = 0;
    };
};
console.log(numberZeroArray);

//2.

let numberZeroOneTwoArray = [];
for (let i = 0; i < 3; i++) {
    numberZeroOneTwoArray.push( [] );
    for (let j = 0; j < 3; j++) {
        numberZeroOneTwoArray[i].push(i);
    };
};
console.log(numberZeroOneTwoArray);

//3. 

let numberZeroOneTwoConsArray = [];
for (let i = 0; i < 3; i++) {
    numberZeroOneTwoConsArray.push( [] );
    for (let j = 0; j < 3; j++) {
        numberZeroOneTwoConsArray[i].push(j);
    };
};
console.log(numberZeroOneTwoConsArray);

//4.

let letterX = [[0, 1, 2], [0, 1, 2], [0, 1, 2]];

for( var i = 0; i < letterX.length; i++ ) {
    for( var j = 0; j < 3; j++ ) {
        letterX[i][j] = "x";
    };
};

console.log(letterX);