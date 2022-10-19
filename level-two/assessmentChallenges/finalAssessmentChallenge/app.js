const readline = require("readline-sync")

//Code Challenge 1

// Given the following code below, write a function that uses  .map()  to wrap each name of the array in an <h1> opening and closing tag.
const people = [ "John", "Adam", "Amber" ]

function peopleElements(arr) {
   let updatedPeople = arr.map(function(e) {
    return '<h1>' + e + '</h1>'
   });
   return updatedPeople
}

peopleElements(people)

console.log(peopleElements(people))

// Expected Output: [ "<h1>John</h1>", "<h1>Adam</h1>", "<h1>Amber</h1>" ]

//Code Challenge 2

// Use only the SPREAD OPERATOR to copy the values in arr1 and arr2 into arr3.
const arr1 = [ 1, 3, 5 ]
const arr2= [ 2, 4, 6 ]
const arr3 = [ ...arr1, ...arr2];

console.log(arr3);

// Expected Output: [1,3,5,2,4,6]