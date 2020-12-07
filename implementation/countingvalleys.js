//counting valleys

let lvl = 0;
let count = 0;
//let steps = 8;
//const path = ['U','D','D','D','U','D','U','U'];

let steps = 12;
const path = ['D','D','U','U','D','D','U','D','U','U','U','D']

function countingValleys(steps, path) {
    for(let i = 0; i < steps; i++) {
        if(path[i] == 'U') { 
            ++lvl;
        }
        if(path[i] == 'D') {
            --lvl;
        }
        // if we just came UP to sea level
        if(lvl == 0 && path[i] == 'U'){
            ++count;
        }
    }
    return count;
}

let result = countingValleys(steps, path);
console.log(result);