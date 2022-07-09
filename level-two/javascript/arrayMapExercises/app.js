const readline = require("readline-sync");


//1. Make an array of numbers that are doubles of the first array

function doubleNumbers(arr){
    const result = arr.map(num => num * 2);
    return result;
  };
  
console.log(doubleNumbers([2, 5, 100])); // [4, 10, 200]

//2. Take an array of numbers and make them strings

function stringItUp(arr){
    const result = arr.map(num => num.toString())
    return result;
  };
  
  console.log(stringItUp([2, 5, 100])); // ["2", "5", "100"]
  
 //3. Capitalize the first letter of each name and make the rest of the characters lowercase
 
 function capitalizeNames(arr){
    const firstInitial = arr.map(upper => upper.charAt(0).toUpperCase() + upper.slice(1).toLowerCase());    
    return firstInitial;
  };
  
  console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"])); 
  
  // Output:
  // ["John", "Jacob", "Jingleheimer", "Schmidt"]

  //4. Make an array of strings of the names

  function namesOnly(arr){
    let name = arr.map(names => names.name.toString());
    return name;
  }
  
  console.log(namesOnly([
      {
          name: "Angelina Jolie",
          age: 80
      },
      {
          name: "Eric Jones",
          age: 2
      },
      {
          name: "Paris Hilton",
          age: 5
      },
      {
          name: "Kayne West",
          age: 16
      },
      {
          name: "Bob Ziroll",
          age: 100
      }
  ]));
  // ["Angelina Jolie", "Eric Jones", "Paris Hilton", "Kayne West", "Bob Ziroll"]
  
  //5. Make an array of strings of the names saying whether or not they can go to The Matrix

  function makeStrings(arr){
    const approved = arr.map(verify => {
        if (verify.age >= 18) {
            return verify.name + " can go to The Matrix"
        } else {
            return verify.name + " is under age!!"
        }
    })
    return approved;
  }
  
  console.log(makeStrings([
      {
          name: "Angelina Jolie",
          age: 80
      },
      {
          name: "Eric Jones",
          age: 2
      },
      {
          name: "Paris Hilton",
          age: 5
      },
      {
          name: "Kayne West",
          age: 16
      },
      {
          name: "Bob Ziroll",
          age: 100
      }
  ]));
  // ["Angelina Jolie can go to The Matrix",
  // "Eric Jones is under age!!",
  // "Paris Hilton is under age!!",
  // "Kayne West is under age!!",
  // "Bob Ziroll can go to The Matrix"]
  

  //6. Make an array of the names in h1s, and the ages in h2s

  function readyToPutInTheDOM(arr){
    const innerHtmlUpdate = arr.map(html => {
       return "<h1>" + html.name + "</h1><h2>" + html.age + "</h2>"
    });
    return innerHtmlUpdate;
  }
  console.log(readyToPutInTheDOM([
      {
          name: "Angelina Jolie",
          age: 80
      },
      {
          name: "Eric Jones",
          age: 2
      },
      {
          name: "Paris Hilton",
          age: 5
      },
      {
          name: "Kayne West",
          age: 16
      },
      {
          name: "Bob Ziroll",
          age: 100
      }
  ]));
  // ["<h1>Angelina Jolie</h1><h2>80</h2>",
  // "<h1>Eric Jones</h1><h2>2</h2>",
  // "<h1>Paris Hilton</h1><h2>5</h2>",
  // "<h1>Kayne West</h1><h2>16</h2>",
  // "<h1>Bob Ziroll</h1><h2>100</h2>"]