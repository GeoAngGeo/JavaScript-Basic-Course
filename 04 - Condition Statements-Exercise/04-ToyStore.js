function toyStore(priceExcursion, pcsPuzzle, pcsDoll, pcsBear, pcsMinion, pcsTruck,){
    let pcsToys= pcsPuzzle + pcsDoll + pcsBear + pcsMinion + pcsTruck;
    let priceToys = (pcsPuzzle * 2.60) + (pcsDoll * 3) + (pcsBear * 4.10) + (pcsMinion * 8.20 ) + (pcsTruck * 2);
    let discount = 0;

    if (pcsToys >= 50){
        discount = priceToys * 0.25;
           }

    let finalPrice= priceToys - discount;
    let rent = finalPrice * 0.1; 
    let profit = finalPrice - rent;
    
    
    if (profit >= priceExcursion ){
        console.log(`Yes! ${(profit-priceExcursion).toFixed(2)} lv left.`);        
    } else {
        
        console.log(`Not enough money! ${(priceExcursion-profit).toFixed(2)} lv needed.`);
    }

}

toyStore(40.8,20,25,30,50,10);
toyStore(320,8,2,5,5,1);
