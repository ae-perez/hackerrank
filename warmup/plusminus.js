const arr = [-4, 3, -9, 0, 4, 1];

console.log(plusMinus(arr));

function plusMinus(arr) {
    let n = arr.length;
    let positive = 0;
    let negative = 0;
    let zero = 0;

    for (let i = 0; i < arr.length; i++) {
        if(arr[i] > 0) {
            positive++;
        } else if (arr[i] < 0) {
            negative++;
        } else  if(arr[i] == 0) {
            zero++;
        }
    }

    positive = (positive/n).toFixed(6);
    negative = (negative/n).toFixed(6);
    zero = (zero/n).toFixed(6);

    return positive + "\n" + negative + "\n" + zero;

}