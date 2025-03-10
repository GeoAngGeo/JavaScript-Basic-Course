function fishTank(lengthTank, widthTank, highTank, percentTank){
    let volumeTankCm = lengthTank * widthTank * highTank;
    let volumeTankLtr = volumeTankCm * 0.001;

    let volumeWaterLtr = volumeTankLtr * (1 - (percentTank/100));

    console.log(volumeWaterLtr);
    

}

fishTank(85,75,47,17)