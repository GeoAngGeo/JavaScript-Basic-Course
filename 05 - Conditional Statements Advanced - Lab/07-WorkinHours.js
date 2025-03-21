function workingHours(hour,day){
    switch (day){
        case "Monday":{
            if (hour>=10 && hour <=18){
                console.log("open");                
            } else {
                console.log("closed")
            }
        }break;
        case "Tuesday":{
            if (hour>=10 && hour <=18){
                console.log("open");                
            } else {
                console.log("closed")
            }
        }break;
        case "Wednesday":{
            if (hour>=10 && hour <=18){
                console.log("open");                
            } else {
                console.log("closed")
            }
        } break;
        case "Thursday":{
            if (hour>=10 && hour <=18){
                console.log("open");                
            } else {
                console.log("closed")
            }
        }break;
        case "Friday":{
            if (hour>=10 && hour <=18){
                console.log("open");                
            } else {
                console.log("closed")
            }
        }break;
        case "Saturday":{
            if (hour>=10 && hour <=18){
                console.log("open");                
            } else {
                console.log("closed")
            }
        }break;
        case "Sunday":{
            console.log("closed")
        }break;
        default : {
            console.log("Error")
        }break;
    }
}

workingHours(13,    "Sunday"    )