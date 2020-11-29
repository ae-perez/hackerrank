let arr = [
    [11, 2, 4],
    [4, 5, 6],
    [10, 8, -12]
];

console.table(arr); //WOOOOOW, cool!

function diagonalDifference(arr) {
    let sum1 = 0;
    let sum2 = 0;
    let len = arr.length; 

    //get sum1
    for(let row = 0; row < len; row++){
        for(let column = 0; column < len; column++) {
            if(row == column) {
                sum1 += arr[row][column];
            }
        }
    }
            //get sum2
    for(let row = len -1; row >= 0; row--) {
        for(let column = 0; column < len; column++) {
            if(row == ((len - column) - 1) && column < len) {
            sum2 += arr[row][column];
            }
        }
     }

     //remeber you want to return the ABSOLUTE value
     //return ((sum1 - sum2) * -1);
    return Math.abs(sum1 - sum2); //this method returns absolute number

    
}

console.log(diagonalDifference(arr));

/*
watched a video, their solution: 

function diagonalDifference(arr) {
    let length = arr.length;
    let sum1 = 0;
    let sum2 = 0;

    for(let i = 0; i < arr.length; i++) {
        sum1 += arr[i][i];
        sum2 += arr[lenght-1-i][i];
    }
    return Math.abs(sum1-sum2); 

}

*/