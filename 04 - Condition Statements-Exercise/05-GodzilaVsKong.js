function godzilaMovie(budget, pcsActors, priceDressPerActor){
    let decor = budget * 0.1 ;
    let priceDress = pcsActors * priceDressPerActor;
    if (pcsActors > 150){
        priceDress = priceDress - (0.1 * priceDress);
    }
    
    let finalCost= decor + priceDress;

    if (finalCost > budget){
        console.log("Not enough money!");
        console.log(`Wingard needs ${(finalCost-budget).toFixed(2)} leva more.`);
    } else {
        console.log("Action!" );
        console.log(`Wingard starts filming with ${(budget-finalCost).toFixed(2)} leva left.`);
    }
}
godzilaMovie(9587.88,222,55.68)


// 1.	Бюджет за филма – реално число в интервала [1.00 … 1000000.00]
// 2.	Брой на статистите – цяло число в интервала [1 … 500]
// 3.	Цена за облекло на един статист – реално число в интервала [1.00 … 1000.00]


//	Декорът за филма е на стойност 10% от бюджета. 
// При повече от 150 статиста,  има отстъпка за облеклото на стойност 10%.

//	Ако  парите за декора и дрехите са повече от бюджета:
//	"Not enough money!"
//	"Wingard needs {парите недостигащи за филма} leva more."
//	Ако парите за декора и дрехите са по малко или равни на бюджета:
//	"Action!" 
//	"Wingard starts filming with {останалите пари} leva left."
