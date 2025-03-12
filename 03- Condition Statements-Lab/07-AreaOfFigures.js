function areaFigure(shape, num1,num2){
    if (shape === "square"){
        let area = num1 * num1 ;
        console.log(area.toFixed(3));
        }
        else if (shape === "rectangle"){
            let area = num1 * num2;
            console.log(area.toFixed(3))
        }
        else if (shape === "circle"){
            let area = Math.PI * num1 * num1;
            console.log(area.toFixed(3))
        }
        else if (shape === "triangle"){
            let area = (num1 * num2) / 2;
            console.log(area.toFixed(3))
        }

}

areaFigure("square",5);
areaFigure("rectangle",7,2.5);
areaFigure("circle", 6);
areaFigure("triangle", 4.5, 20);