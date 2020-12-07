let n = 9;
const ar = [10, 20, 20, 10, 10, 30, 50, 10, 20];

//let n = 10;
//let ar = [1, 1, 3, 1, 2, 1, 3, 3, 3, 3];

function sockMerchant(n, ar) {
    let count = 0;
    let i = 0;
    ar.sort();

    while (i < n) {
        if(ar[i] === ar[i+1]) {
            ar.splice(i, 2);
            count++;
        }
        i++;
    }
    
    return (count/2);
}

let result = sockMerchant(n, ar);
console.log(result);