const readline = require("readline-sync");

//1. 
let addedNum = 0;

function sum(x, y){
    try { 
        if(typeof(x)!== "number")
            throw new Error("This is not a number!")
        if(typeof(y)!== "number")
            throw new Error("This is not a number!")
        return x+y
    } catch (e) {
        console.log(e);
    };
  };

    console.log(sum("1", "2"));


  //2

  var user = {username: "sam", password: "123abc"};
function login(username, password){
  try {
    if(username !== user.username)
    throw new Error("UserName Does Not Exist")
    if(password !== user.password)
    throw new Error("Password Is Incorrect!")
    return "Login Successful!"
  } catch (e) {
    console.log(e);
  }
}

console.log(login("sam","123abc"));
console.log(login("bear", "fight"));
console.log(login("sam","fight"));
