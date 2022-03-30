
//Create an object and navigate that object using dot notation

const product = {
    sku: "FMP-01",
    name: "Femmenessence MacaPause"
}

console.log(product.name)

//create an array and navigat that array using bracket notation

const petNames = ["Dallas", "Copper", "Binx", "Molly", "Moose"]

console.log(petNames[3])

//a conditional statement

let sport = 'football'

if(sport === 'soccer') {
    console.log("He likes soccer")
} else if(sport === 'football') {
    console.log("He likes football")   
} else {
    console.log('I am unsure if he likes sports')
}

// A loop

for(let i = 20; i <36; i+=2) {
    console.log(i)
}


// an addevent listener method to call a function

//DOM = Document Object Model

let newButton = document.getElementById("newButton")

function myButton () {
    console.log("The calculator is not working yet. More to Come!")
}

newButton.addEventListener("click", myButton)


//Data Types - Create variable for each data type below using the example provided for a string 


//String - denoted/represented by " " ' ' - they are great for words,language
let firstName = "Andrew"
console.log(firstName)
console.log( firstName[0])

let gender = "Male"
console.log(gender)

////////


//Number - anything of numerical value - just a number

let age = 33
console.log(age)


////////



//Boolean - true or false 

let x=7
let y=8
console.log(x>y)


/////////



//Array - are denoted/represented by [] - are great for holding multiple pieces of data
//use bracket notation [] here with the array you created use 


console.log(petNames[3])

console.log( petNames.length )


//Object - denoted/represented by {} - great for describing something in detail - like a billing address
// use dot notation . here with the object you created .

//////////

console.log(product["sku"])

product.qtyordered = 2
console.log(product.qtyordered)



//Create an object - use each datatype as a property
//Use dot and bracket notation to display your knowledge
//////////




//Conditional Statement
//if (this is true){ execute this code }
//  else if (this is true) {do this code instead!}
//  else {for anything else do this here!}
//using the variable provided below create a conditional statement

//Using below example below to create your own conditional statement.
let color = "blurple"

if (color === "red") {
    console.log("I am blue!")
} else if (color === 'blue') {
    console.log("I am red!")
} else {
    console.log(" i am something else!")
}





let food = 'Burgers'

switch(food){
    case 'Fries':
        console.log("He Likes Fries")
        break
    case 'Burgers':
        console.log("He Likes Burgers")
        break
    default:
        console.log("He does not eat fast food!")
    
    }



// /////////



//For Loops - At their most elementary form they are just creating an number line for us; starting at a number and ending at a number - these number are represented by a single variable, named i

//for (#1Step start point; #2Step end point; #4Step howtogetthere){
//    #3Step what to do 
//} 

//i = i + 1 same i++


//Create 1 for loop








//////////////////
//level 0 curriculum last 5 videos cover this material "DOM"

//1. Create button with an ID on it in HTML
//2. Call Button into JS using document and getting element by its ID
//3. Set that button equal to a variable
//4. with that variable use dot notation to access the addeventlistener method




//var newButton = document.getElementById("button")
//newButton.addEventListener( "click", greeting )