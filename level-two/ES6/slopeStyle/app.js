const readline = require("readline-sync");

//1. Rest and Spread Operator

let collectAnimals = (...arr) => arr;

console.log(collectAnimals("dog", "cat", "mouse", "jackolope", "platypus"));
// ["dog", "cat", "mouse", "jackolope", "platypus"]

//2. enhanced object literal syntax

function combineFruit(fruit, sweets, vegetables){
    return {fruit, sweets, vegetables}
}

console.log(combineFruit(["apple", "pear"],
             ["cake", "pie"],
             ["carrot"]));

             //=> {
//         fruit: ["apple", "pear"],
//         sweets: ["cake", "pie"],
//         vegetables: ["carrot"]
//      }

//3. destructuring

function parseSentence({location, duration}){
    return `We're going to have a good time in ${location} for ${duration}`
  }
  
  console.log(parseSentence({
    location: "Burly, Idaho",
    duration: "2 weeks"
  }));

  //4. array destructuring

  function returnFirst(items){
    const [firstItem] = items; /*change this line to be es6*/
    return firstItem
}

console.log(returnFirst(["ball","towel","sunglasses"]));

//5. destructuring code

const favoriteActivities = ["magnets", "snowboarding", "philanthropy", "janitor work", "eating"];

function returnFavorites(arr){
    const [firstFav, secondFav, thirdFav] = arr;
    return `"My top three favorite activities are ${firstFav}, ${secondFav}, and ${thirdFav}`;
}

console.log(returnFavorites(favoriteActivities));

//6. Rest and Spread Operator

function combineAnimals(...arr) {
    let allAnimals = [].concat(...arr);
    return allAnimals;
}

const realAnimals = ["dog", "cat", "mouse"];
const magicalAnimals = ["jackolope"];
const mysteriousAnimals = ["platypus"];

console.log(combineAnimals(realAnimals, magicalAnimals, mysteriousAnimals));

// ["dog", "cat", "mouse", "jackolope", "platypus"]

//7. ES6

function product(a, b, c, d, e) {
    let numbers = [a,b,c,d,e];
    return numbers.reduce((acc, number) => acc * number
    , 1)
  }
  
console.log(product(1,2,3,4,5));

//8. ES6

const dogs = ["Molly", "Moose"];

function unshift(array, ...rest) {
    return [...rest, ...array];
  }

 console.log(unshift(dogs, 1, 2, 3, 4, 5));

 //9. destructuring code

 function populatePeople(names){
    return names.map(name => {
        name = name.split(" ");
        const firstName = name[0];
        const lastName = name[1];
        return {firstName, lastName}
    })
}

console.log(populatePeople(["Frank Peterson", "Suzy Degual", "Liza Jones"]));
//[
//  {firstName: "Frank", lastName: "Peterson"},
//  {firstName: "Suzy", lastName: "Degual"},
//  {firstName: "Liza", lastName: "Jones"},
//]