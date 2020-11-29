const candles = [3, 2, 1, 3];

function birthdayCakeCandles(candles) {
    let count = 0;
    candles.sort();
    let max = candles[candles.length-1];

    for(let i = 0; i < candles.length; i++) {
        if(candles[i] > max) {
            max = candles[i];
        } else if (candles[i] == max) {
            count++;
        }
    }

    return count;


}

let result = birthdayCakeCandles(candles);
console.log(result);

/*
 Take one:
    //declare variables
    let compare = 0;
    const arr = [];
    
    //sort array
    candles.sort();

    //find highest value
    for(let i = 0; i < candles.length; i++) {
        compare = Math.max(candles[i]);
    }

    //compare array to highest value
    for(let i = 0; i < candles.length; i++) {
      if (candles[i] == compare) {
            arr.push(candles[i]);
        }
    }

    return arr.length;
 */