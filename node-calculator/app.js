const readline = require("readline-sync");
let numberOne = readline.question("Please enter your first number: ");
let numberTwo = readline.question("Please enter your second number: ");
let mathSymbol = readline.question("Please enter the operation to perform (+, -, *, /): ");

if (mathSymbol === "+") {
    let addResult = +numberOne + +numberTwo;
    console.log("The result is: ", addResult);
} else if (mathSymbol === "-") {
    let minusResult = numberOne - numberTwo;
    console.log("The result is: ", minusResult);
} else if (mathSymbol === "*") {
    let multiplyResult = numberOne * numberTwo;
    console.log("The result is: ", multiplyResult);
} else if (mathSymbol === "/") {
    let divideResult = numberOne / numberTwo;
    console.log("The result is: ", divideResult);
};



