function suppliesForSchool(penPcs,markerPcs,detergentLtr, discount){
    let penSum = penPcs * 5.8;
    let markerSum = markerPcs * 7.2;
    let detergentSum = detergentLtr * 1.2;
    let finalSum= penSum + markerSum + detergentSum;
    let discountSum= finalSum - (finalSum*discount/100);
    console.log(discountSum);
    
}

suppliesForSchool(2,3,4,25);
suppliesForSchool(4,2,5,13);