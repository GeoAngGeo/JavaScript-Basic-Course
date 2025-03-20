function bonusScore(num1){
    bonus = 0.0;
    if (num1 <= 100 ){
        bonus = 5;    
    }
    else if (num1 <= 1000){
        bonus = num1 * 0.2 ;
    }
    else {
        bonus = num1 * 0.1 ;
    }

    if (num1 % 2 == 0){
        bonus = bonus +1;
    }
    else if (num1 % 10 == 5){
        bonus = bonus + 2;
    }
    console.log(bonus);
    console.log(num1+bonus);
}

bonusScore(20);
bonusScore(175);
bonusScore(2703);
bonusScore(15875);