const readline = require("readline-sync");

var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

//1. Remove the last item from the vegetable array.
var removeLettuce = vegetables.pop();
console.log(vegetables);
console.log(removeLettuce);
//2. Remove the first item from the fruit array.
var removeBanana = fruit.shift();
console.log(fruit);
console.log(removeBanana);
//3. Find the index of "orange."
var indexOfOrange = fruit.indexOf("orange");
console.log(fruit);
console.log(indexOfOrange);
//4. Add that number to the end of the fruit array.
var addIndexOfOrange = fruit.push(indexOfOrange);
console.log(fruit);
console.log(addIndexOfOrange);
//5. Use the length property to find the length of the vegetable array.
var lengthOfVegetables = vegetables.length
console.log(lengthOfVegetables);
//6. Add that number to the end of the vegetable array.
var addLengthOfVegetables = vegetables.push(lengthOfVegetables);
console.log(addLengthOfVegetables);
console.log(vegetables);
//7. Put the two arrays together into one array. Fruit first. Call the new Array "food".
var food = fruit.concat(vegetables);
console.log(food);
//8. Remove 2 elements from your new array starting at index 4 with one method.
var removeIndexFourAndFive = food.splice(4, 2);
console.log(removeIndexFourAndFive);
console.log(food);
//9. Reverse your array.
food.reverse();
console.log(food);
//10. Turn the array into a string and return it.
console.log(food.join(", "));

