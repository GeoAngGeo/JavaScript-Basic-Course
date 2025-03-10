function depositCalculator(sumDeposit, timeDeposit, rateDeposit){
    let accruedInterest = sumDeposit * (rateDeposit/100);
    let monthRateDeposit = accruedInterest / 12;
    let finalSumDeposit = sumDeposit + timeDeposit * monthRateDeposit;
console.log(finalSumDeposit);

}

depositCalculator(200,3,5.7);
depositCalculator(2350,6,7);