function timeAdd(hours,minutes){
    let totalTime = (hours*60) + minutes + 15;
    let hours1 = Math.floor (totalTime/60);
    let minutes1 = totalTime % 60;
    if (hours1 > 23){
        hours1 = 0;
        if (minutes1 < 10){
            console.log(`${hours1}:0${minutes1}`);    
        }
        else {console.log(`${hours1}:${minutes1}`);
    } 
    }
    else{    
    if (minutes1 < 10){
        console.log(`${hours1}:0${minutes1}`);    
    }
    else {console.log(`${hours1}:${minutes1}`);
}
} 
}

timeAdd(1,46);
timeAdd(0,1);
timeAdd(23,59);
timeAdd(11,8);
timeAdd(12,49);