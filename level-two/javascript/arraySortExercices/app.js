const readline = require("readline-sync");

//1. Sort an array from smallest number to largest

function leastToGreatest(arr) {
    let minToMax = arr.sort((a, b) => a-b);
    return minToMax;
  }
  
  console.log(leastToGreatest([1, 3, 5, 2, 90, 20])); // [1, 2, 3, 5, 20, 90]

//2. Sort an array from largest number to smallest

function greatestToLeast(arr) {
    let maxToMin = arr.sort((a, b) => b-a);
    return maxToMin;
  }
  
  console.log(greatestToLeast([1, 3, 5, 2, 90, 20])); // [90, 20, 5, 3, 2, 1]
  
//3. Sort an array from shortest string to longest

function lengthSort(arr) {
    let lengthMinToMax = arr.sort((a, b) => a.length - b.length);
    return lengthMinToMax;
  }
  
  console.log(lengthSort(["dog", "wolf", "by", "family", "eaten"])); // ["by", "dog", "wolf", "eaten", "family"]

//4. Sort an array alphabetically
  
function alphabetical(arr) {
    let alpha = arr.sort();
    return alpha;
}

console.log(alphabetical(["dog", "wolf", "by", "family", "eaten"])); // ["by", "dog", "eaten", "family", "wolf"]

//5. Sort the objects in the array by age

function byAge(arr){
    let age = arr.sort((a, b) => a.age - b.age);
    return age;
  }
  
  console.log(byAge([
      { name: "Quiet Samurai", age: 22 },
      { name: "Arrogant Ambassador", age: 100 },
      { name: "Misunderstood Observer", age: 2 },
      { name: "Unlucky Swami", age: 77 }
  ]));
  // => [ { name: 'Misunderstood Observer', age: 2 },
  //  { name: 'Quiet Samurai', age: 22 },
  //  { name: 'Unlucky Swami', age: 77 },
  //  { name: 'Arrogant Ambassador', age: 100 } ]
