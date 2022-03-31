let square = document.getElementsByClassName("square")
console.log(square[0])

for (var i = 0; i < square.length; i++) {
    console.log(square[i].innerText)
}

let test = document.getElementsByClassName("noName")
console.log(test)

// 1. Difference between getElementByClassName and getElementsByClassName is that getElementByClassName will select 1 unqiue id and getElementsByClassName will gather the whole HTML collection with the matching class ID.
// 2. returns HTMLCollection [] - length 0 (an empty array)

let testTwo = document.getElementById("noNameTwo")
console.log(testTwo)

// 3. returns null

// querySelector selects single element on the page - if multiple same element, it will select first

var selectQuerySelectorTest = document.querySelector("#dJSquares")
console.log(selectQuerySelectorTest)
//returns <ol id="dJSquares">..</ol>> - entire ol (ordered list). for .querySelector to pull the full <ol>, use "#{ol name}"" 

// querySelecttorAll selects all elements from the page that match

var selectQuerySelectorTest = document.querySelectorAll("#dJSquares")
console.log(selectQuerySelectorTest)
//returns NodeList [ol#dJSquares]. NodeList is the essentially the same thing as HTMLCollection

// (#) is used for IDs, (.) is used for class

var selectQuerySelectorTest = document.querySelectorAll("#dJSquares")
console.log(selectQuerySelectorTest.length)
//returns the qty of elements with that ID specifically

//var selectQuerySelectorTest = document.querySelector("ol#dJSquares > li")
//console.log(selectQuerySelectorTest)
//retuns li.square (the first item in the array)

var result = document.querySelectorAll("ol#dJSquares > li")
console.log(result)
//returns NodeList(4) [li.square, li.square, li.square, li.square]. The full Array (ol)

var result = document.querySelectorAll("li.sensitiveInformation")
console.log(Array.from(result))
//returns (3) [li.sensitiveInformation, li.sensitiveInformation, li.sensitiveInformation,] 

for (var i = 0; i<result.length; i++) {
    result[i].textContent = "----Private Information----"
}
// .textContent element changes text in HTML document via javascript. In this case it shows as redacted.

// for loops: From the example above, you can read:
//Statement 1 sets a variable before the loop starts (let i = 0).
//Statement 2 defines the condition for the loop to run (i must be less than 5).
//Statement 3 increases a value (i++) each time the code block in the loop has been executed.
//best way to change text using JavaScript is using textContent, not innerHTML (security risk) and not innerText (expensive)

let headerOne = document.getElementById("header").textContent;
document.getElementById("paragraph").textContent = headerOne;

let headerTwoPractice = document.querySelector("#headerTwo").textContent;
document.querySelector("#paragraphTwo").textContent = headerTwoPractice;

//textContent practice - listing two different methods above.

//Place Left Off Modifying an Elements Text