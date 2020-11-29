/*
Function Description
Complete the timeConversion function in the editor below. It should return a new string representing the input time in 24 hour format.

timeConversion has the following parameter(s):
- string s: a time in  12 hour format

Returns
- string: the time in  24 hour format
*/

let s = "07:05:45PM"; 

function timeConversion(s) {
    //declare variables
    let convert = s.slice(0,2);
    let regex = convert;
    let ret; 

    //search for AM
    if(s.includes("AM")) {
        //change convert into number
        console.log(convert);
        if(convert == '12') {
            convert = '00';
        }

        s = s.replace("AM", " ");
        ret = s.replace(regex, convert);
    }
    
    

    //search for PM
   if (s.includes("PM")) {
        //change convert to number
        convert = parseInt(convert);
        if(convert !== 12) {
            convert += 12;
        } else {
            convert = convert;
        }

        //change back to string and then replace & remove PM
        convert = convert.toString();
        s = s.replace("PM", " ");
        ret = s.replace(regex, convert);
    }

    return ret;
}

let result = timeConversion(s);
console.log(result);