const scores = [100000000, 100000000, 10000000, 10000000, 1000000]; // 1 - 100000000

function breakingRecords(scores) {

    let highScore = scores[0];
    let lowScore = scores[0];
    let max = 0;
    let nMax = scores[0];
    let nMin = scores[0];
    let min = 0;
    let ret = [];


    for(let i = 1; i < scores.length; i++) {
        if(scores[i] >= highScore) {
            highScore = scores[i];
            if(highScore > nMax) {
                nMax = highScore;
                max++;
            }
            
        } else if(scores[i] <= lowScore) {
            lowScore = scores[i];
            if(lowScore < nMin) {
                nMin = lowScore;
                min++;
            }
        }

    }

    ret.push(max);
    ret.push(min);

    return ret;

}


const result = breakingRecords(scores);

console.log(result); //[H, L]