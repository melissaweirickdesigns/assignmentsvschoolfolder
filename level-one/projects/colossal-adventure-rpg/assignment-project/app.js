const readline = require("readline-sync");

let playerHitPoints = 100;
let totalDamage = 0;
let escapeChance = 0;
let currentEnemy = 0;
let inventory = [];
let inventorySelector = 0;

let bagOfHolding = " Bag of Holding";
let cloakOfProtection = " Cloak of Protection";
let broomOfFlying = " Broom of Flying";
let wandOfMagicMissile = " Wand of Magic Missile";
let alchemyJug = " Alchemy Jug";
let magicWeapon = " Magic Weapon";
let illuminatorsTattoo = " Illumiators Tattoo";
let bootsOfFalseTracks = " Boots of False Tracks";
let spellScroll = " Spell Scroll";
let circletOfBlasting = " Circlet of Blasting";
let iounStone = " Ioun Stone";


let enemyOne = {
    Monster: "Bear",
    HitPoints: 75
};
let enemyTwo = {
    Monster: "Lion",
    HitPoints: 50
};
let enemyThree = {
    Monster: "Monkey",
    HitPoints: 25
};

function walkForward() {
    attackChance = Math.floor(Math.random() * (3 - 1) + 1);
};

function enemySelection() {
    currentEnemy = Math.floor(Math.random() * (3-1) + 1);
};

function attackDamage() {
    totalDamage = Math.floor(Math.random() * (20-1) + 1);
};

function escape() {
    escapeChance = Math.floor(Math.random() * (100-1) + 1);
};

function inventoryFunction() {
    inventorySelector = Math.floor(Math.random() * (11-1) + 1);
}

let playerName = readline.question("You open the door, and find your self standing on narrow walkway leading to the middle of the room. In the middle of room, you see a stand with a book on it. You walk to the book and open it. It asks, What is your Name? ");

console.log(playerName + ", Welcome. A door suddenly appears and opens to a dense forest.");

while (true) {
    if (playerHitPoints > 0) {            
        let walk = readline.question("Press (w) to walk forward or (p) to see your player profile. ");
        if (walk === "w") {
            console.log("You begin to walk");
            walkForward();
            while(true) {
                if (attackChance === 1) {
                    break;
                } else if (attackChance === 2) {
                    attackDamage();
                    console.log("You have been attacked from behind and have not looked had a chance to look at the enemy. The enemy has taken " + totalDamage + " Hit Points from you. ");
                    playerHitPoints = Math.floor(playerHitPoints - totalDamage);             
                    if (playerHitPoints > 0) {
                        console.log(" You now have " + playerHitPoints + " Hit Points. ");
                        let runOrAttack = readline.question("Would you like to run (r) or attack (a)? ");
                        if (runOrAttack === "r") {
                            console.log("You attempt to run away...");
                            attackDamage();
                            console.log("You have been attacked. The enemy has taken " + totalDamage + " Hit Points. ")
                            playerHitPoints = Math.floor(playerHitPoints - totalDamage);
                            if (playerHitPoints > 0) {
                                console.log(" You now have " + playerHitPoints + " Hit Points. ");
                                escape();
                                if (escapeChance > 50) {
                                    console.log("You attempt to run away and are successful. ");
                                    break;
                                } else if (escapeChance < 51) {
                                    console.log("The enemy has you trapped. You must fight back. ");
                                    enemySelection();
                                    if (currentEnemy === 1) {
                                        currentEnemy = enemyOne;
                                    } else if (currentEnemy === 2) {
                                        currentEnemy = enemyTwo;
                                    } else if (currentEnemy === 3) {
                                        currentEnemy = enemyThree;
                                    } ;
                                    console.log("You turn around and see a " + currentEnemy.Monster + ". They have " + currentEnemy.HitPoints + " Hit Points. You attack the " + currentEnemy.Monster);
                                    while (true) {
                                        if (playerHitPoints > 0) {
                                            attackDamage();
                                            currentEnemy.HitPoints = Math.floor(currentEnemy.HitPoints - totalDamage);
                                            console.log("The enemy has been hit. You took " + totalDamage + " hit points from it. ");
                                            if (currentEnemy.HitPoints > 0) {
                                                console.log("They have " + currentEnemy.HitPoints + " hit points. ");
                                                attackDamage();
                                                console.log("The enemy attacks back. The enemy has taken " + totalDamage + " Hit Points from you. ")
                                                playerHitPoints = Math.floor(playerHitPoints - totalDamage);
                                                if (playerHitPoints > 0) {
                                                    console.log("You now have " + playerHitPoints + " hit points. ");
                                                } else if (playerHitPoints < 1) {
                                                    break;
                                                };
                                            } else if (currentEnemy.HitPoints < 1) {
                                                console.log("You have successfuly defeated the enemy. You continue on your journey. ");
                                                if (currentEnemy === 1) {
                                                    currentEnemy.HitPoints = 75;
                                                } else if (currentEnemy === 2) {
                                                    currentEnemy.HitPoints = 50;
                                                } else if (currentEnemy === 3) {
                                                    currentEnemy.HitPoints = 25;
                                                } ;
                                                playerHitPoints = Math.floor(playerHitPoints + playerHitPoints);
                                                inventoryFunction();
                                                if (inventorySelector === 1) {
                                                    inventory.push(bagOfHolding);
                                                } else if (inventorySelector === 2) {
                                                    inventory.push(cloakOfProtection);
                                                } else if (inventorySelector === 3) {
                                                    inventory.push(broomOfFlying);
                                                } else if (inventorySelector === 4) {
                                                    inventory.push(wandOfMagicMissile);
                                                } else if (inventorySelector === 5) {
                                                    inventory.push(alchemyJug);
                                                } else if (inventorySelector === 6) {
                                                    inventory.push(magicWeapon);
                                                } else if (inventorySelector === 7) {
                                                    inventory.push(illuminatorsTattoo);
                                                } else if (inventorySelector === 8) {
                                                    inventory.push(bootsOfFalseTracks);
                                                } else if (inventorySelector === 9) {
                                                    inventory.push(spellScroll);
                                                } else if (inventorySelector === 10) {
                                                    inventory.push(circletOfBlasting);
                                                } else if (inventorySelector === 11) {
                                                    inventory.push(iounStone);
                                                };
                                                console.log("You now have " + playerHitPoints + " hit points after you take a short rest to heal. You have also gained one special item. Check your inventory to find out what you have received. ");
                                                break;
                                            };    
                                        } else if (playerHitPoints < 1) {
                                            break;
                                        };
                                    };                               
                                }; 
                            } else if (playerHitPoints < 1) {
                                break;
                            };
                            break;                         
                        } else if (runOrAttack === "a") {
                            enemySelection();
                            if (currentEnemy === 1) {
                                currentEnemy = enemyOne;
                            } else if (currentEnemy === 2) {
                                currentEnemy = enemyTwo;
                            } else if (currentEnemy === 3) {
                                currentEnemy = enemyThree;
                            } ;
                            console.log("You turn around and see a " + currentEnemy.Monster + ". They have " + currentEnemy.HitPoints + " Hit Points. You attack the " + currentEnemy.Monster);
                            while (true) {
                                if (playerHitPoints > 0) {
                                    attackDamage();
                                    currentEnemy.HitPoints = Math.floor(currentEnemy.HitPoints - totalDamage);
                                    console.log("The enemy has been hit. You took " + totalDamage + " hit points from it. ");
                                    if (currentEnemy.HitPoints > 0) {
                                        console.log("They have " + currentEnemy.HitPoints + " hit points. ");
                                        attackDamage();
                                        console.log("The enemy attacks back. The enemy has taken " + totalDamage + " Hit Points from you. ")
                                        playerHitPoints = Math.floor(playerHitPoints - totalDamage);
                                        if (playerHitPoints > 0) {
                                            console.log("You now have " + playerHitPoints + " hit points. ");
                                        } else if (playerHitPoints < 1) {
                                            break;
                                        };
                                    } else if (currentEnemy.HitPoints < 1) {
                                        console.log("You have successfuly defeated the enemy. You continue on your journey. ");
                                        if (currentEnemy === 1) {
                                            currentEnemy.HitPoints = 75;
                                        } else if (currentEnemy === 2) {
                                            currentEnemy.HitPoints = 50;
                                        } else if (currentEnemy === 3) {
                                            currentEnemy.HitPoints = 25;
                                        } ;
                                        playerHitPoints = Math.floor(playerHitPoints + playerHitPoints);
                                        inventoryFunction();
                                        if (inventorySelector === 1) {
                                            inventory.push(bagOfHolding);
                                        } else if (inventorySelector === 2) {
                                            inventory.push(cloakOfProtection);
                                        } else if (inventorySelector === 3) {
                                            inventory.push(broomOfFlying);
                                        } else if (inventorySelector === 4) {
                                            inventory.push(wandOfMagicMissile);
                                        } else if (inventorySelector === 5) {
                                            inventory.push(alchemyJug);
                                        } else if (inventorySelector === 6) {
                                            inventory.push(magicWeapon);
                                        } else if (inventorySelector === 7) {
                                            inventory.push(illuminatorsTattoo);
                                        } else if (inventorySelector === 8) {
                                            inventory.push(bootsOfFalseTracks);
                                        } else if (inventorySelector === 9) {
                                            inventory.push(spellScroll);
                                        } else if (inventorySelector === 10) {
                                            inventory.push(circletOfBlasting);
                                        } else if (inventorySelector === 11) {
                                            inventory.push(iounStone);
                                        };
                                        console.log("You now have " + playerHitPoints + " hit points after you take a short rest to heal. You have also gained one special item. Check your inventory to find out. ");
                                        break;
                                    };    
                                } else if (playerHitPoints < 1) {
                                    break;
                                };
                            };
                            break;                               
                        }; 
                    } else if (playerHitPoints < 1) {
                        break;
                    };
                } else if (attackChance === 3) {
                    break;
                } else if (attackChance === 4) {
                    break;
                };
            }; 
        } else if (walk === "p") {
            console.log("Player Name: " + playerName + ", Hit Points: " + playerHitPoints + ", Inventory: " + inventory);          
        };
    } else if (playerHitPoints < 1) {
        console.log("The enemy lays a critical hit on you. So long partner, you have died! Game Over!");
        break;
    };
};