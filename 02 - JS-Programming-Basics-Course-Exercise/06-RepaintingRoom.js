function repaintingRoom(nylonSqr, paintLtr, thinnerLtr, workHrs){
    let nylonSum = (nylonSqr + 2) * 1.5;
    let paintSum = (paintLtr + (paintLtr * 0.1)) * 14.5;
    let thinnerSum = thinnerLtr * 5;
    let materialSum = nylonSum + paintSum + thinnerSum + 0.4;
    let workSum = (materialSum * 0.3) * workHrs;
    let finalSum = materialSum + workSum;
    console.log(`Сумата на всички разходи е ${finalSum}`);
    
}

repaintingRoom(10,11,4,8);
repaintingRoom(5,10,10,1);