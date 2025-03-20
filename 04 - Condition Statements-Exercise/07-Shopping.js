function shopComputer(budgetPeter, vguPcs, procPcs, ramPcs){
    let vguPrice = vguPcs * 250;
    let procPrice = (0.35 * vguPrice) * procPcs;
    let ramPrice =(0.1 * vguPrice) * ramPcs;

    let finalPrice = vguPrice + procPrice + ramPrice ;
    let discount = 0.00;
    
    if (vguPcs > procPcs){
        finalPrice = finalPrice - (0.15 *finalPrice);
    }
    // console.log(finalPrice);

    if (budgetPeter >= finalPrice){
        console.log(`You have ${(budgetPeter-finalPrice).toFixed(2)} leva left!`); 
    } else {
        console.log(`Not enough money! You need ${(finalPrice-budgetPeter).toFixed(2)} leva more!`)
    }
}

shopComputer(920.45,3,1,1)

// Видеокарта – 250 лв./бр.
// Процесор – 35% от цената на закупените видеокарти/бр.
// Рам памет – 10% от цената на закупените видеокарти/бр.
//Ако броя на видеокартите е по-голям от този на процесорите получава 15% отстъпка от крайната сметка. 

//	Ако бюджета е достатъчен:
// "You have {остатъчен бюджет} leva left!"
// Ако сумата надхвърля бюджета:
// "Not enough money! You need {нужна сума} leva more!"
