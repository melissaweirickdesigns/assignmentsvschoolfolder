
function getNumberOfVowels(str) { 
    let vowels = [];
    for (let i = 0; i < str.length; i++) {
        if (str[i] === "a" || str[i] === "e" || str[i] === "i" || str[i] === "o" || str[i] === "u") {
            vowels.push(str[i]);
        };
    };
    return vowels.length;
}
 console.log(getNumberOfVowels("hello world")) // 3
 console.log(getNumberOfVowels("fishing")) // 2

 ///

let names = [ "Jerry", "Adam" ]
const person = { firstName: "Robert", lastName: "Jones", age: 37 }

names.push(person.firstName);
console.log(names);
