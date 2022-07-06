const goombaQtyAdd = document.gForm.gSubmit;
const bobOmbsQtyAdd = document.bForm.bSubmit;
const cheepCheepsQtyAdd = document.cForm.cSubmit;
let goombaQtyTotal = document.getElementById("goombaQtyTotal");
let goombaQtyNewTotal = "0";
const gQtyPrice = document.getElementById("gQtyPrice");
let goombaCoinsOwed = document.getElementById("goombaCoinsOwed");
let goombaNewCoinsMath = "0";
let goombaNewCoinsOwed = "0";
let bobOmbsQtyTotal = document.getElementById("bobOmbsQtyTotal");
let bobOmbsQtyNewTotal = "0";
const bQtyPrice = document.getElementById("bQtyPrice");
let bobOmbsCoinsOwed = document.getElementById("bobOmbsCoinsOwed");
let bobOmbsNewCoinsMath = "0";
let bobOmbsNewCoinsOwed = "0";
let cheepCheepsQtyTotal = document.getElementById("cheepCheepsQtyTotal");
let cheepCheepsQtyNewTotal = "0";
const cQtyPrice = document.getElementById("cQtyPrice");
let cheepCheepsCoinsOwed = document.getElementById("cheepCheepsCoinsOwed");
let cheepCheepsNewCoinsMath = "0";
let cheepCheepsNewCoinsOwed = "0";
let totalBaddies = document.getElementById("totalBaddies");
let totalBaddiesNewTotal = "0";
let totalInvoiceAmount = document.getElementById("totalInvoiceAmount");
let totalInvoiceAmountNewTotal = "0";
const totalInvoiceSubmit = document.getElementById("totalInvoiceSubmit");

function totalInvoice() {
    totalBaddiesNewTotal = Math.floor(Number(goombaQtyTotal.value) + Number(bobOmbsQtyTotal.value) + Number(cheepCheepsQtyTotal.value));
    totalBaddies.value = totalBaddiesNewTotal;
    totalInvoiceAmountNewTotal = Math.floor(Number(goombaCoinsOwed.value) + Number(bobOmbsCoinsOwed.value) + Number(cheepCheepsCoinsOwed.value));
    totalInvoiceAmount.value = totalInvoiceAmountNewTotal;
};

goombaQtyAdd.addEventListener('click', (e) => {
    e.preventDefault(); 
    goombaQtyNewTotal = Math.floor(Number(gForm.gQty.value) + Number(goombaQtyTotal.value)); 
    goombaQtyTotal.value = goombaQtyNewTotal;
    goombaNewCoinsOwed = Math.floor(Number(gForm.gQty.value) * Number(gQtyPrice.innerHTML)); 
    goombaNewCoinsMath = Math.floor(Number(goombaCoinsOwed.value) + Number(goombaNewCoinsOwed))
    goombaCoinsOwed.value = goombaNewCoinsMath;
    totalInvoice();
    gForm.gQty.value = "";
});

bobOmbsQtyAdd.addEventListener('click', (e) => {
    e.preventDefault();  
    bobOmbsQtyNewTotal = Math.floor(Number(bForm.bQty.value) + Number(bobOmbsQtyTotal.value)); 
    bobOmbsQtyTotal.value = bobOmbsQtyNewTotal;
    bobOmbsNewCoinsOwed = Math.floor(Number(bForm.bQty.value) * Number(bQtyPrice.innerHTML)); 
    bobOmbsNewCoinsMath = Math.floor(Number(bobOmbsCoinsOwed.value) + Number(bobOmbsNewCoinsOwed))
    bobOmbsCoinsOwed.value = bobOmbsNewCoinsMath;
    totalInvoice();
    bForm.bQty.value = "";
});

cheepCheepsQtyAdd.addEventListener('click', (e) => {
    e.preventDefault(); 
    cheepCheepsQtyNewTotal = Math.floor(Number(cForm.cQty.value) + Number(cheepCheepsQtyTotal.value)); 
    cheepCheepsQtyTotal.value = cheepCheepsQtyNewTotal;
    cheepCheepsNewCoinsOwed = Math.floor(Number(cForm.cQty.value) * Number(cQtyPrice.innerHTML)); 
    cheepCheepsNewCoinsMath = Math.floor(Number(cheepCheepsCoinsOwed.value) + Number(cheepCheepsNewCoinsOwed))
    cheepCheepsCoinsOwed.value = cheepCheepsNewCoinsMath;
    totalInvoice();
    cForm.cQty.value = "";
});

totalInvoiceSubmit.addEventListener('click', (e) => {
    e.preventDefault();
    if (totalInvoiceAmount.value > "0") {
        alert("You have submitted your invoice to Princess Peach. Please wait 30 days for payment.");
    goombaQtyTotal.value = "0";
    goombaCoinsOwed.value = "0";
    bobOmbsQtyTotal.value = "0";
    bobOmbsCoinsOwed.value = "0";
    cheepCheepsQtyTotal.value ="0";
    cheepCheepsCoinsOwed.value = "0";
    totalBaddies.value = "0";
    totalInvoiceAmount.value = "0";
    } else {
        alert("You have not entered any Baddies Found!");
    } 
});