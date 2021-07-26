const purchasePrice = document.querySelector("#purchaseprice");
const stockQuantity = document.querySelector("#stockquantity");
const currentPrice = document.querySelector("#currentprice");

const checkButton = document.querySelector("#check");

const outputDiv = document.querySelector(".output");

checkButton.addEventListener("click",()=>{
    console.log("ss");
    console.log(purchasePrice.value);
    console.log(stockQuantity.value);
    console.log(currentPrice.value);
})