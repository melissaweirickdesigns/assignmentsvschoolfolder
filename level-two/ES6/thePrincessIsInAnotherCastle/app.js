
let number;
let attackNumber;
let namePicked;
let playerInterval;

function randomNumber(min, max) {
        number = Math.floor(Math.random() * (max - min) + min);
        if (number === 1) {
            namePicked = "Mario";
        } else {
            namePicked = "Luigi"
        };
    };

randomNumber(1, 2);

class Player {
    constructor(name, totalCoins, status, hasStar, message){
        this.name = name;
        this.totalCoins = totalCoins;
        this.status = status;
        this.hasStar = hasStar;
        this.message = message;
    };

    setName(namePicked){
        if (namePicked === "Mario"){
            this.name = "Mario";
        } else if (namePicked === "Luigi"){
            this.name = "Luigi";
        };
        return this.name;
    };

    gotHit(){
        if (this.status === "Powered Up") {
            if (this.hasStar === true) {
                this.status = "Powered Up";
                this.hasStar = false;
                this.message = "Your star protected you!"
            } else {
                this.status = "Big";
                this.message = "";
            };            
        } else if (this.status === "Big") {
            this.status = "Small";
            this.message = "";
        } else if (this.status === "Small") {
            this.status = "Dead";
            this.message = "Your final score was ";
            clearInterval(playerInterval);
        };
    };

    gotPowerup(){
        if (this.status === "Small") {
            this.status = "Big";
        } else if (this.status === "Big") {
            this.status = "Powered Up";
        } else if (this.status === "Powered Up") {
            this.hasStar = true;
            this.message = "Congratulations! You got a star!";
        };
    };

    addCoin(){
        this.totalCoins = Math.floor(this.totalCoins + 1);
        this.message = "";
    };

    print(){
        if (this.hasStar === true) {
            console.log(
                "\n",
                this.message + "\n",
                "Name: " + this.name + "\n",
                "TotalCoins: " + this.totalCoins + "\n",
                "Status: " + this.status + "\n",
                "You have a star" + "\n",
                );                
        } else if (this.hasStar === false) {
            if (this.status === "Powered Up") {
                console.log(
                    "\n",
                    this.message + "\n",
                    "Name: " + this.name + "\n",
                    "TotalCoins: " + this.totalCoins + "\n",
                    "Status: " + this.status + "\n"
                )   ;                 
            } else if (this.status === "Dead") {
                console.log(
                    "\n",
                    "Name: " + this.name + "\n",
                    "TotalCoins: " + this.totalCoins + "\n",
                    "Status: " + this.status + "\n",
                    this.message + " " + this.totalCoins +
                    "\n"
                );                    
            } else {
                console.log(
                    "\n",
                    "Name: " + this.name + "\n",
                    "TotalCoins: " + this.totalCoins + "\n",
                    "Status: " + this.status +
                    "\n"
                );
            };
        };     
    };
    attackRandomNumber(min, max) {
        attackNumber = Math.floor(Math.random() * (max - min) + min);
        console.log("\n" + "Your roll was " + attackNumber + "\n");
        if (attackNumber < 34) {
            this.gotHit();
        } else if (attackNumber > 67) {
            this.gotPowerup();
        } else {
            this.addCoin();
        };
        this.print();
    };

};

const playerOne = new Player(namePicked, 0, "Big", false, "Welcome to the Game");

playerInterval = setInterval(function(){playerOne.attackRandomNumber(0,100)},1000);

