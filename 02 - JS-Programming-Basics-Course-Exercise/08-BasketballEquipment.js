function basketballEquipment (annualPrice){
    let shoesPrice = annualPrice - (annualPrice * 0.4);
    let jerseyPrice = shoesPrice - (shoesPrice * 0.2 );   
    let ballPrice = jerseyPrice * 0.25;
    let accesoriesPrice = ballPrice * 0.2;
    
    let finalPrice= (annualPrice + shoesPrice + jerseyPrice + ballPrice + accesoriesPrice).toFixed(2);

    console.log(finalPrice);
    

}

basketballEquipment(365);