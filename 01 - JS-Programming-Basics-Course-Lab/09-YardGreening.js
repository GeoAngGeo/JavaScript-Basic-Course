function yardGreening(sqrToGreen){
    let priceToGreen= sqrToGreen * 7.61;
    let discount= 0.18 * priceToGreen;
    let finalPrice= priceToGreen - discount;
    console.log(`The final price is: ${finalPrice} lv.`);
    console.log(`The discount is: ${discount} lv.`);
    
}
yardGreening(550);