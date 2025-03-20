function lunchBreak(serialName, episodeTime, breakTime){
    let lunchTime = 0.125 * breakTime;
    let relaxTime = 0.25 * breakTime;
    let finalTime = breakTime - lunchTime - relaxTime;

    if (finalTime >= episodeTime){
        console.log(`You have enough time to watch ${serialName} and left with ${(Math.ceil(finalTime-episodeTime))} minutes free time.`);  
    } else {
        console.log(`You don't have enough time to watch ${serialName}, you need ${(Math.ceil(episodeTime-finalTime))} more minutes.`)
    }
}

lunchBreak("Game of thrones", 48, 60)

// . Времето за обяд ще бъде 1/8 от времето за почивка, а времето за отдих ще бъде 1/4 от времето за почивка.

//1.	Име на сериал – текст
// 2.	Продължителност на епизод  – цяло число в диапазона [10… 90]
// 3.	Продължителност на почивката  – цяло число в диапазона [10… 120]

//	Ако времето е достатъчно да изгледате епизода: 
// "You have enough time to watch {име на сериал} and left with {останало време} minutes free time."
// •	Ако времето не Ви е достатъчно:
//"You don't have enough time to watch {име на сериал}, you need {нужно време} more minutes."

//Времето в двете изходни съобщения да се закръгли до най-близкото цяло число нагоре.
