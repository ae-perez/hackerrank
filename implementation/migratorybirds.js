//const arr = [1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4]; //3
const arr = [1, 4, 4, 4, 5, 3]; //4

function migratoryBirds(arr) {
    arr.sort();
    console.log(arr);
    let compare = [0, 0, 0, 0, 0];

    //first tally
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == 1) {
            compare[0]++;
        } else if (arr[i] == 2) {
            compare[1]++;
        }  else if (arr[i] == 3) {
            compare[2]++;
        }  else if (arr[i] == 4) {
            compare[3]++;
        }  else if (arr[i] == 5) {
            compare[4]++;
        }
    }

    let highestCount = Math.max.apply(Math, compare)
    let type = 4;
    //now find the index of the max
    for (let i = 0; i < compare.length; i++) {
        if(compare[i] == highestCount && i < type) {
            type = i;
        }
    }

    //add 1 because you are starting at 1 not at 0
    return (type+1);
}

const result = migratoryBirds(arr);
console.log(result);
