const readline = require("readline-sync");

//1. 

let numbers = [3, 5, 2, 8, 1]
let largest = 0;

function largestNumber(num, large) {
    for (i=0; i<=num.length; i++) {
        if (num[i]>large) {
            large = num[i];
        };
    };
    
    console.log(large);
}

largestNumber (numbers, largest);

//2. 

let words = ["#3", "$$$", "C%4!", "Hey!"];
let lettersWithStrings = [];

function wordStrings (word, string) {
    for (i=0; i<word.length; i++) {
        if (word[i].includes("!")) {
            string.push(word[i]);
        };
    };
    
    console.log(string);
};

wordStrings (words, lettersWithStrings);



//3.

function division(num1, num2) {
    if (num2 * num2 === num1) {
        console.log("true");
    } else {
        console.log("false");
    };
};

division (4,2);
division (9,3);
division (15, 4);