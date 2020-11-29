console.log("testing");

// Complete the staircase function below.
function staircase(n) {
    let hashTagArr = new Array(n).fill(' ');

    for (let i = n; i > 0; i--) {
        hashTagArr.shift();
        hashTagArr.push('#');
        console.log(hashTagArr.join(""));

        /*
        .join() - returns array as a string
        the elements will be seperated by specified separator > default is comma
        */
    }

}

staircase(6);