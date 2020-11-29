// remove - mini_max_sum

const arr = [1, 3, 5, 7, 9];

function miniMaxSum(arr) {
    let minSum = 0;
    let maxSum = 0;

    //first sort the array, in case you get one that isn't sorted
    arr.sort();
    
    for(let i = 0; i < arr.length - 1; i++) {
        minSum += arr[i];
    }

    for (let i = 1; i < arr.length; i++) {
        maxSum += arr[i];
    }

    console.log(minSum + " " + maxSum);


}

miniMaxSum(arr);