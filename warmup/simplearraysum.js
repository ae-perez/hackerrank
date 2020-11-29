/*
Given an array of integers, find the sum of its elements
For examples,
if the array ar = [1 2 3]
    then 1 + 2 + 3 = 6, so it would return 6
*/


function simpleArraySum(ar) {
    let ret = 0; //this will hold your sum

    for(let i = 0; i < ar.length; i ++) {
        ret += ar[i];
    }
    
    return ret;

}

const ar = [1, 2, 3, 4, 10, 11];
console.log(simpleArraySum(ar));


