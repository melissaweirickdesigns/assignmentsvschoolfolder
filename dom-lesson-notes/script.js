let square = document.getElementsByClassName("square");
console.log(square[0]);

for (let i = 0; i < square.length; i++) {
    console.log(square[i].innerText)
};

const test = document.getElementsByClassName("noName");
console.log(test);

// 1. Difference between getElementByClassName and getElementsByClassName is that getElementByClassName will select 1 unqiue id and getElementsByClassName will gather the whole HTML collection with the matching class ID.
// 2. returns HTMLCollection [] - length 0 (an empty array)

const testTwo = document.getElementById("noNameTwo");
console.log(testTwo);

// 3. returns null

// querySelector selects single element on the page - if multiple same element, it will select first

const selectQuerySelectorTestOne = document.querySelector("#dJSquares");
console.log(selectQuerySelectorTestOne);
//returns <ol id="dJSquares">..</ol>> - entire ol (ordered list). for .querySelector to pull the full <ol>, use "#{ol name}"" 

// querySelecttorAll selects all elements from the page that match

const selectQuerySelectorTestTwo = document.querySelectorAll("#dJSquares");
console.log(selectQuerySelectorTestTwo);
//returns NodeList [ol#dJSquares]. NodeList is the essentially the same thing as HTMLCollection

// (#) is used for IDs, (.) is used for class

const selectQuerySelectorTestThree = document.querySelectorAll("#dJSquares");
console.log(selectQuerySelectorTestThree.length);
//returns the qty of elements with that ID specifically

//var selectQuerySelectorTest = document.querySelector("ol#dJSquares > li")
//console.log(selectQuerySelectorTest)
//retuns li.square (the first item in the array)

const resultOne = document.querySelectorAll("ol#dJSquares > li");
console.log(resultOne);
//returns NodeList(4) [li.square, li.square, li.square, li.square]. The full Array (ol)

const result = document.querySelectorAll("li.sensitiveInformation");
console.log(Array.from(result));
//returns (3) [li.sensitiveInformation, li.sensitiveInformation, li.sensitiveInformation,] 

for (let i = 0; i<result.length; i++) {
    result[i].textContent = "----Private Information----"
};
// .textContent element changes text in HTML document via javascript. In this case it shows as redacted.

// for loops: From the example above, you can read:
//Statement 1 sets a variable before the loop starts (let i = 0).
//Statement 2 defines the condition for the loop to run (i must be less than 5).
//Statement 3 increases a value (i++) each time the code block in the loop has been executed.
//best way to change text using JavaScript is using textContent, not innerHTML (security risk) and not innerText (expensive)

const headerOne = document.getElementById("header").textContent;
document.getElementById("paragraph").textContent = headerOne;

const headerTwoPractice = document.querySelector("#headerTwo").textContent;
document.querySelector("#paragraphTwo").textContent = headerTwoPractice;

//textContent practice - listing two different methods above.

const dJSquaresOne = document.getElementById("dJSquares");
console.log(dJSquaresOne.style);
//This shows as CSSStyleDeclaration in console. Lists all of the possible CSS styles

console.log(typeof dJSquaresOne.style);
//This shows as object only

console.log(Object.keys(dJSquaresOne.style));
//This shows as an array of 579 css styles all clumpped together.
//I like the console.log(dJSquaresOne.style) option the best

dJSquaresOne.style.backgroundColor = "purple";
//changes the background color of purple

document.body.style.backgroundColor = "aqua";
//used the body element to change the entire background orange but left the puple style

//className

const querySelector = document.getElementById("profileInformation").className;
console.log(querySelector);
//returns blank? If it is redacted, will it show the class name?

const headerClassStyle = document.getElementById("header").className;
console.log(headerClassStyle);
//returns headerOne. This returns the name of the class.

//document.querySelector("#header").className += " headerNewClass"
//classList

document.querySelector("#header").classList.add("headerNewClass");
console.log(document.querySelector("#header").className);
//returns headerOne headerNewClass. added a new class through js and not on the style sheet

document.querySelector("#header").classList.remove("headerOne");
console.log(document.querySelector("#header").className);
//returns headerNewClass removed the HeaderOne class through js and not through css. this did not error out the previous runs

document.querySelector("#header").classList.toggle("headerOne");
console.log(document.querySelector("#header").className);
document.querySelector("#header").classList.toggle("headerOne");
console.log(document.querySelector("#header").className);
document.querySelector("#header").classList.toggle("headerOne");
console.log(document.querySelector("#header").className);
//adds and removed headerOne to and from the class list.

const textInputOne = document.getElementById("textInput");
console.log(textInputOne.value);
// returns search which is what the value is in the html document

textInputOne.value = "Hello, My Name is Melissa";
//changed the value of the text box to show in the HTML front end, not the text
console.log(textInputOne.value);
//also shows as the new text in the dev console

const querySelectorOne = document.querySelector("#profileInformation").className;
console.log(querySelectorOne);
//troubleshooting why redacted classname will not show

const newLI = document.createElement("li");
const dJSquaresTwo = document.getElementById("dJSquares");
dJSquaresTwo.append(newLI);
//this changed the HTML front end to add an additional list point

newLI.textContent = "Header Five";
//added text to the new element added through js

//ol is ordered list {1. , 2., 3., }. ul is unordered list {bullet point}

const newLi2 = document.createElement("li");
const dJSquaresFour = document.getElementById("dJSquares");
dJSquaresTwo.prepend(newLi2);
// this added the new list item to the ol as number 1

newLi2.textContent = "Header Zero";
//This added text to ol number 1

const newParagraph = document.createElement("p");
newParagraph.textContent = "This is a test paragraph";
document.body.append(newParagraph);
//add the paragraph this is a test paragraph to the bottom of the body

newParagraph.style.textAlign = "center";
newParagraph.style.fontSize = "72px";
//this change the new paragraph to be centered and enlarged the size of the font

const dJSquaresThree = document.getElementById("dJSquares");
dJSquaresThree.innerHTML += "<li>Header Six</li>";
//this added list item number 7 on the front end of the HTML page

document.body.innerHTML += "<p id='innerHTMLParagraph'>I added and innerHTML paragraph using JavaScript</p>";
//this takes the whole body element and adds a parragraph at the bottom on the front end of HTML

document.getElementById('innerHTMLParagraph').style.color = "orange";
//this changes the color of the text to orange

//Task Questions

//1. Search google to learn a little more about the difference between the '.append()' method and the '.appendChild()' method

//append() not support on all platforms (IE)
//append() has shorter code writing
//appendChild() appends an element as the last child of an element
//append() appends an element to the end of the list
//append() has an advantage as it is more flexible, you can add more than one element at a time and you can add text as a string
// example below of append
const p = document.querySelector('p');
p.append('. This is an appended text');

//vs appendChild()

const pOne = document.querySelector('h1');
const newParagraphOne = document.createElement('p');
newParagraphOne.textContent = "appendChild() paragraph";

pOne.appendChild(newParagraphOne);


//helpful videos for additional append/prepend options:
        // 1. https://www.youtube.com/watch?v=b94jaGyAzFA&ab_channel=StudyAtHome
        // 2. https://www.youtube.com/watch?v=umHdBuTw98c&ab_channel=AngelaDelise   
//2. What do you see as pros/cons of using '.createElement()' and 'append()' vs 'innerHTML'?

// keeps existing code/nodes to reference, however updates it through Javascript. using innerHTML, you would have to rewrite all DOM

//3. What happens if I create an element using 'createElement()' but don't use '.append()'?

const pTwo = document.querySelector('h1');
const newParagraphTwo = document.createElement('p');
//not using append or append child after you create an element saves the element on the backend but will not add it to the front end.

//4. how might you use a for loop in conjunction with the DOM methods for create elements?

// 1. https://www.youtube.com/watch?v=e0ihEHxd6vI&ab_channel=dcode

const address = document.getElementById("profileInformation");
const addressComponents = ["Street Address: 1235 Alphabet St", "City: Sesame Street", "State: CA", "Zipcode: 90210"];

for (let addComp of addressComponents) {
    let newAddComp = document.createElement('li');
    newAddComp.textContent = addComp;
    address.appendChild(newAddComp);
};

//Creating Elements in JS: For loops & createElement