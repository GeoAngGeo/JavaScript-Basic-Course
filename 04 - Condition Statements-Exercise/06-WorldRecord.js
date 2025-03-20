function worldRecord(timeRecord, distance, timePerMtr){
    
    let timeIvan = distance * timePerMtr;
    let waterFriction = Math.floor (distance / 15) * 12.5;
    let timeRecordIvan = timeIvan + waterFriction;
    
    if(timeRecordIvan < timeRecord){
        console.log(` Yes, he succeeded! The new world record is ${(timeRecordIvan).toFixed(2)} seconds.`);
             } else {
                console.log (`No, he failed! He was ${(timeRecordIvan-timeRecord).toFixed(2)} seconds slower.`);
             }
    //console.log(timeRecordIvan);
}

worldRecord(55555.67,3017,5.03)

//съпротивлението на водата го забавя на всеки 15 м. с 12.5 секунди. 
//резултатът трябва да се закръгли надолу до най-близкото цяло число.

// 1.	Рекордът в секунди – реално число в интервала [0.00 … 100000.00]
// 2.	Разстоянието в метри – реално число в интервала [0.00 … 100000.00]
// 3.	Времето в секунди, за което плува разстояние от 1 м. - реално число в интервала [0.00 … 1000.00]

// •	Ако Иван е подобрил Световния рекорд (времето му е по-малко от рекорда) отпечатваме:
// o	" Yes, he succeeded! The new world record is {времето на Иван} seconds."
// •	Ако НЕ е подобрил рекорда (времето му е по-голямо или равно на рекорда) отпечатваме:
// o	"No, he failed! He was {недостигащите секунди} seconds slower."
