function smallShop (product, city, qty){
    switch (city) {
        case "Sofia":{
            switch (product){
                case "coffee" : 
                    console.log(qty * 0.50);
                    break;
                case "water" :
                    console.log (qty * 0.80);
                    break;
                case "beer" :
                    console.log (qty * 1.20);
                    break;
                case "sweets" :
                    console.log (qty * 1.45);
                    break;
                case "peanuts" :
                    console.log (qty * 1.60);
                    break;
            } break;
        }
        case "Plovdiv":{
            switch (product){
                case "coffee" : 
                    console.log(qty * 0.40);
                    break;
                case "water" :
                    console.log (qty * 0.70);
                    break;
                case "beer" :
                    console.log (qty * 1.15);
                    break;
                case "sweets" :
                    console.log (qty * 1.30);
                    break;
                case "peanuts" :
                    console.log (qty * 1.50);
                    break;
            } break;
        }
        case "Varna" : {
            switch (product){
                case "coffee" : 
                    console.log(qty * 0.45);
                    break;
                case "water" :
                    console.log (qty * 0.70);
                    break;
                case "beer" :
                    console.log (qty * 1.10);
                    break;
                case "sweets" :
                    console.log (qty * 1.35);
                    break;
                case "peanuts" :
                    console.log (qty * 1.55);
                    break;
            }break;
        }
    }

}

smallShop("beer","Sofia",2)