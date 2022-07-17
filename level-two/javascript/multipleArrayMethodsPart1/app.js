const readline = require("readline-sync");

var peopleArray = [
    {
        firstName: "Sarah",
        lastName: "Palin",
        age: 47
    },
    {
        firstName: "Frank",
        lastName: "Zappa",
        age: 12
    },
    {
        firstName: "Rick",
        lastName: "Sanchez",
        age: 78
    },
    {
        firstName: "Morty",
        lastName: "Smith",
        age: 29
    },
    {
        firstName: "Kyle",
        lastName: "Mooney",
        age: 27
    },
    {
        firstName: "Pasha",
        lastName: "Datsyuk",
        age: 13
    },
    {
        firstName: "Lev",
        lastName: "Tolstoy",
        age: 82
    }
]

function sortedOfAge(arr){
    let sorted = arr.sort((a, b) => {
        if (a.lastName < b.lastName) {
            return -1;
        } if (a.lastName > b.lastName) {
            return 1;
        } return 0;
    });
    let age = sorted.filter(person => person.age > 18);    
    let madeString = age.map(statement => {
        return "<li>" + statement.firstName + " " + statement.lastName + " is " + statement.age + "</li>";
    })
    return madeString;
 }

 
 console.log(sortedOfAge(peopleArray));
 /*
 Output:
 [
     "<li>Kyle Mooney is 27</li>",
     "<li>Sarah Palin is 47</li>",
     "<li>Rick Sanchez is 78</li>",
     "<li>Morty Smith is 29</li>",
     "<li>Lev Tolstoy is 82</li>"
 ]
 */
 