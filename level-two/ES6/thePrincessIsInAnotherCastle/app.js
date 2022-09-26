
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
    constructor(name, totalCoins, status, hasStar){
        this.name = name;
        this.totalCoins = totalCoins;
        this.status = status;
        this.hasStar = hasStar;
    };

    setName(namePicked){
        if (namePicked === "Mario"){
            this.name = "Mario";
        } else if (namePicked === "Luigi"){
            this.name = "Luigi";
        };
    };

    gotHit(){
        if (this.status === "Powered Up") {
            if (this.hasStar === true) {
                this.status = "Powered Up";
            } else {
                this.status = "Big";
            };            
        } else if (this.status === "Big") {
            this.status = "Small";
        } else if (this.status === "Small") {
            this.status = "Dead";
            clearInterval(playerInterval);
        };
    };

    gotPowerup(){
        if (this.status === "Small") {
            this.status = "Big";
        } else if (this.status === "Big") {
            this.status === "Powered Up";
        } else if (this.status === "Powered Up") {
            this.hasStar = true;
        };
    };

    addCoin(){
        this.totalCoins = Math.floor(this.totalCoins + 1);
    };

    print(){
        if (this.hasStar === true) {
            console.log(
                "\n",
                "Congratulations! You got a star!" + "\n",
                "Name: " + this.name + "\n",
                "TotalCoins: " + this.totalCoins + "\n",
                "Status: " + this.status + "\n",
                "You have a star" + "\n",
                );                
        } else if (this.hasStar === false) {
            if (this.status === "Powered Up") {
                console.log(
                    "\n",
                    "Your star protected you!" + "\n",
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
                    "Your final score was " + this.totalCoins +
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
        if (attackNumber === 0) {
            this.gotHit();
        } else if (attackNumber === 1) {
            this.gotPowerup();
        } else if (attackNumber === 2) {
            this.addCoin();
        };
        this.print();
    };

};

const playerOne = new Player(namePicked, 0, "Big", false);

playerInterval = setInterval(function(){playerOne.attackRandomNumber(0,2)},1000);

