//alternative way to count # of times a keyword shows in an array
const readline = require("readline-sync");
const officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer",  "computer"];
const computerCount = function(arr, val) {
    return arr.reduce((acc,elem) => {
        return (val === elem ? acc + 1 : acc)
    }, 0);
};
console.log(computerCount(officeItems, "computer"));
//explained in https://www.youtube.com/watch?v=P3gJr_Rd80g&ab_channel=AllThingsJavaScript%2CLLC

//assignment #1
let countOne = 0;
for (let i = 0; i < officeItems.length; i++) {
    if (officeItems[i] === "computer") {
        countOne += 1;
    };
};

console.log(countOne);

//assignment #2

var peopleWhoWantToSeeMadMaxFuryRoad = [
    {
      name: "Mike",
      age: 12,
      gender: "male"
    },{
      name: "Madeline",
      age: 80,
      gender: "female"
    },{
      name: "Cheryl",
      age: 22,
      gender: "female"
    },{
      name: "Sam",
      age: 30,
      gender: "male"
    },{
      name: "Suzy",
      age: 4,
      gender: "female"
    }
  ]

  for (let j=0; j < peopleWhoWantToSeeMadMaxFuryRoad.length; j++) {
      if (peopleWhoWantToSeeMadMaxFuryRoad[j].age > 17) {
          if (peopleWhoWantToSeeMadMaxFuryRoad[j].gender === "female") {
            console.log(peopleWhoWantToSeeMadMaxFuryRoad[j].name + " is old enough. She's good to see Mad Max Fury Road");
          } else if (peopleWhoWantToSeeMadMaxFuryRoad[j].gender === "male") {
            console.log(peopleWhoWantToSeeMadMaxFuryRoad[j].name + " is old enough. He's good to see Mad Max Fury Road");  
          };            
      } else {
        if (peopleWhoWantToSeeMadMaxFuryRoad[j].gender === "female") {
            console.log(peopleWhoWantToSeeMadMaxFuryRoad[j].name + " is not old enough to see Mad Max Fury Road, don't let HER in.");
        } else if (peopleWhoWantToSeeMadMaxFuryRoad[j].gender === "male") {
            console.log(peopleWhoWantToSeeMadMaxFuryRoad[j].name + " is not old enough to see Mad Max Fury Road, don't let HIM in.");  
        };            
      };
  };

