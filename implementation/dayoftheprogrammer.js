//dayoftheprogrammer.js
//day of the programmer
/*
Gregorian calender - leap years are divisible by 400 OR divisible by 4 and not divisible by 100

y = year
find date of 256th day
1700-1917 = julian calender
1918 - 2700 = georgian calender

julian leap years = divisible by 4 ==0
gregorian calender = divisible by 400, divisible by 4, not divisible by 100 == 0, !== 0

in both calenders feb has 29 days in leap year and 28 on others
*/

//let year = 2017; //13.09.2017 //not leap
//let year = 2016; //12.09.2016 //leap
//let year = 1800; //12.09.1800
let year = 2100;

function dayOfProgrammer(year) {
    let date = '12.09.';
    year = year.toString();
    
   //check if julian or gregorian
   if ((year < 1918)) {
       if(year % 4 == 0) {
           date += year;
       } else {
           date = '13.09.' + year;
       }
   } else if (year > 1918) {
       if((year % 4) == 0 && (year % 100) != 0 || (year % 400) ==  0) {
           date += year;
       } else {
           date = '13.09.' + year;
       }
  
   } else {
       date = '26.09.1918';
   }
  
    return date;
}

let result = dayOfProgrammer(year);
console.log(result);
