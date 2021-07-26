const purchasePrice = document.querySelector("#purchaseprice");
const stockQuantity = document.querySelector("#stockquantity");
const currentPrice = document.querySelector("#currentprice");

const checkButton = document.querySelector("#check");

const outputDiv = document.querySelector(".output");



// const outputProfit = `<div style="width:100%">Profit ${profit}</div>`
// const outputLoss = `<div style="width:100%">Loss ${loss}</div>`



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
        outputDiv.innerHTML=`<div class="result-div" style="width:100%"><h1>Profit ${profit}</h1></div>`;
    }else{
        const loss = (purchasePriceNum - currentPriceNum)*stockQuantityNum;
        const lossPercentage = ((purchasePriceNum - currentPriceNum)*100/purchasePriceNum);
        console.log(loss);
        console.log(lossPercentage);
        outputDiv.innerHTML=`<div class="result-div" style="width:100%"><h1>Loss ${loss}</h1></div>`;
    }
})

