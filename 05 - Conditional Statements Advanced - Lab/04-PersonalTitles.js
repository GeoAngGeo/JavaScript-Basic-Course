function personalTitles(age, gender){
    if (age < 16) {
        if (gender === "m"){
            console.log("Master");
            } else {
            console.log("Miss")    
            }
    } else {
        if (gender === "m"){
            console.log("Mr.")
        } else{
            console.log("Ms.")
        }
    }

}
personalTitles(17,"m")