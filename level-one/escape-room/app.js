const readline = require("readline-sync");

let iHaveTheKey = 0;

console.log("You are in a square room with one door and no windows. The door is on the South wall. You see a bookshelf on the North wall. You see a desk on the East wall. You see a hole in the West wall. What do you do?")

while (true) {
    let introQuestion = readline.question('Go to the door (d), Go to the Bookshelf (b), Go to the table (t), or Go to the hole in the wall (h).');
    if (introQuestion === "d") {
        if (iHaveTheKey === 0) {
            console.log("Door is locked. Hmmm...there must be a key somewhere. Lets search for it.");
        } else if (iHaveTheKey === 1) {
            console.log("The door opens. You are now Free! Congratulations, you have won the game.")
            break;
        };
    } else if (introQuestion === "b") {
        console.log("There are many good books here, but no key");
    } else if (introQuestion === "t") {
        iHaveTheKey = 1;
        console.log("You open several drawers and find a hidden compartment where the key is hidden. You pick up the key and put it in your pocket. Where do you want to go next?");
    } else if (introQuestion === "h") {
        let holeInWall = readline.question('You walk over to the hole in the wall. What would you like to do? Put your hand in the hole (hand) or Look through the hole (look).')
        if (holeInWall === "hand") {
            console.log("You put your hand in the wall and immedietly feel someone pull on your arm. You are suddenly in complete darkness and pass out. You have died. Game Over!");
            break;
        } else if (holeInWall === "look") {
            console.log("You look through hole and see nothing but a dim light in the distance. You feel like you are being watched.");
        };
    };
};


