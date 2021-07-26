const purchasePrice = document.querySelector("#purchaseprice");
const stockQuantity = document.querySelector("#stockquantity");
const currentPrice = document.querySelector("#currentprice");

const checkButton = document.querySelector("#check");

const outputDiv = document.querySelector(".output");

checkButton.addEventListener("click",()=>{
    console.log("Check Button is Clicked");
    
    const purchasePriceNum = Number(purchasePrice.value);
    const stockQuantityNum = Number(stockQuantity.value);
    const currentPriceNum = Number(currentPrice.value);

    console.log(purchasePriceNum);
    console.log(stockQuantityNum);
    console.log(currentPriceNum);

    if (currentPriceNum > purchasePriceNum){
        // Profit
        const profit = (currentPriceNum - purchasePriceNum)*stockQuantityNum;
        const profitPercent = ((currentPriceNum - purchasePriceNum)*100/purchasePriceNum);
        console.log(profit);
        console.log(profitPercent);
    }
})