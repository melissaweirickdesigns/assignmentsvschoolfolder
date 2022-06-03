const readline = require("readline-sync");

//1. 

function capilizeAndLowercase(text) {    
    let upperCasedHello = text.toUpperCase();
    let lowerCasedHello = text.toLowerCase();
    let combinedHello = upperCasedHello.concat(lowerCasedHello);
    console.log(combinedHello);
};

capilizeAndLowercase("HelLo");

//2.

function findMiddleIndex(number) {
    let mathFloorHello = Math.floor(number/2);
    console.log(mathFloorHello);
};

findMiddleIndex(5);
findMiddleIndex(11);

//3.

function returnFirstHalf(text) {
    let sliceHello = text.slice(0, text.length / 2);
    console.log(sliceHello);
};

returnFirstHalf("Hello");
returnFirstHalf("Hello World");

//4. 
function capitalizeAndLowerCase(text) {
    let helloOneSliceOne = text.slice(0, text.length / 2).toUpperCase();
    let helloOneSliceTwo = text.slice(text.length / 2).toLowerCase();
    let helloOneCombined = helloOneSliceOne.concat(helloOneSliceTwo);
    console.log(helloOneCombined);
};

capitalizeAndLowerCase("Hello");
capitalizeAndLowerCase("Hello World");

//optional

function capitalize(text) {
    let splitText = text.split(" ");
    let upperCaseSplitText = [];
    for (i = 0; i < splitText.length; i++) {
        let upperCaseSplitTextString = splitText[i][0].toUpperCase() + splitText[i].substring(1);
        upperCaseSplitText.push(upperCaseSplitTextString);
    };
    let combinedUpperCase = upperCaseSplitText.join(" ");
    console.log(combinedUpperCase);

};

capitalize("hey friends! practice practice practice!");