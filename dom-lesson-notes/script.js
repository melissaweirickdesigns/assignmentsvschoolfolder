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

var dJSquaresOne = document.getElementById("dJSquares")
console.log(dJSquaresOne.style)
//This shows as CSSStyleDeclaration in console. Lists all of the possible CSS styles

console.log(typeof dJSquaresOne.style)
//This shows as object only

console.log(Object.keys(dJSquaresOne.style))
//This shows as an array of 579 css styles all clumpped together.
//I like the console.log(dJSquaresOne.style) option the best

dJSquaresOne.style.backgroundColor = "purple"
//changes the background color of purple

document.body.style.backgroundColor = "orange"
//used the body element to change the entire background orange but left the puple style

//className

var sensitiveInfo = document.querySelector("#profileInformation").className
console.log(sensitiveInfo)
//returns blank? If it is redacted, will it show the class name?

var headerClassStyle = document.getElementById("header").className
console.log(headerClassStyle)
//returns headerOne. This returns the name of the class.

//document.querySelector("#header").className += " headerNewClass"
//classList

document.querySelector("#header").classList.add("headerNewClass")
console.log(document.querySelector("#header").className)
//returns headerOne headerNewClass. added a new class through js and not on the style sheet

document.querySelector("#header").classList.remove("headerOne")
console.log(document.querySelector("#header").className)
//returns headerNewClass removed the HeaderOne class through js and not through css. this did not error out the previous runs

document.querySelector("#header").classList.toggle("headerOne")
console.log(document.querySelector("#header").className)
document.querySelector("#header").classList.toggle("headerOne")
console.log(document.querySelector("#header").className)
document.querySelector("#header").classList.toggle("headerOne")
console.log(document.querySelector("#header").className)
//adds and removed headerOne to and from the class list.

var querySelector = document.querySelector("#profileInformation").className
console.log(querySelector)
//changing the variable name to querySelector still returned blank on the dev console

var textInputOne = document.getElementById("textInput")
console.log(textInputOne.value)
// returns search which is what the value is in the html document

textInputOne.value = "Hello, My Name is Melissa"
//changed the value of the text box to show in the HTML front end, not the text
console.log(textInputOne.value)
//also shows as the new text in the dev console



