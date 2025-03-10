function foodDelivery(chickMenu,fishMenu,vegMenu){
    let chickPrice = chickMenu * 10.35;
    let fishPrice =  fishMenu * 12.40;
    let vegPrice = vegMenu * 8.15;

    let menuPrice = chickPrice + fishPrice + vegPrice ;

    let desertPrice = menuPrice * 0.2;

    let finalPrice = menuPrice + desertPrice + 2.50;

    console.log(`цена на поръчката ${finalPrice} лв.`);
    

}

foodDelivery(2,4,3);
foodDelivery(9,2,6);