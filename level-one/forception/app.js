const readline = require("readline-sync");

let people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"];
let alphabet = "abcdefghijklmnopqrstuvwxyz";

function forception(arrayOne, arrayTwo) {
    let modifiedAlphabet = arrayTwo.split("").map(letter => {
        return letter.toUpperCase();
    });
    let combined = [];
    for (let i = 0; i < arrayOne.length; i++) {
        arrayOne[i] = arrayOne[i] + ":";
        combined.push(arrayOne[i], ...modifiedAlphabet);    
    };
    console.log(combined);
};

forception(people, alphabet);



