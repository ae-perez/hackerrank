let n = 5;
let k = 3;
const ar = [2, 8, 6, 8, 4]; //n


// n is length
// k is number you are dividing by
// ar is the arry that will be passed
// return a value that will be placed in let result
function divisibleSumPairs(n, k, ar) {
    let count = 0;
    //console.log(count);
    for(let i = 0; i < n; i++) {
        //console.log(i);
        for(let j = i + 1 ; j < n; j++) {
            //console.log(j);
            if(((ar[i] + ar[j]) % k) === 0) {
                count++;
                //console.log(count.length);
            }
        }
    }
    return count;
}

let result = divisibleSumPairs(n, k, ar);
console.log(result);