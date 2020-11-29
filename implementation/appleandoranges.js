let s = 2;
let t = 3;
let a = 1;
let b = 5;
let m = 1; //what you are adding to apples
let n = 1; //what you are adding to oranges
let apples = [-2];
let oranges = [-1];

function countApplesAndOranges(s, t, a, b, apples, oranges) {
    let appleCount = 0;
    let orangeCount = 0;

    for(let i = 0; i < apples.length; i++) {
        
        if(a + apples[i] >= s && a + apples[i] <= t) {
            appleCount++;
            
        }
    }

    for (let i = 0; i < oranges.length; i++) {

        if(b + oranges[i] >= s && b + oranges[i] <= t) {
            orangeCount++;

        }
    }

    console.log(appleCount + "\n" + orangeCount);


}

countApplesAndOranges(s, t, a, b, apples, oranges);