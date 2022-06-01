const readline = require("readline-sync");

let people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"];
let alphabet = "abcdefghijklmnopqrstuvwxyz";


let modifiedAlphabet = alphabet.split("").map(letter => {
    return letter.toUpperCase();
});
let combined = [];
for (let i = 0; i < people.length; i++) {
    people[i] = people[i] + ":";
    combined.push(people[i], ...modifiedAlphabet);    
};
console.log(combined);
