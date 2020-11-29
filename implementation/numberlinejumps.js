//number line jumps
let x1 = 0;
let v1 = 3;
let x2 = 4;
let v2 = 2;

function kangaroo(x1, v1, x2, v2) {
    const arr1 = [(x1 + v1)];
    const arr2 = [(x2 + v2)];
    let res = "NO";
     
    
   
    //develop arrays that you'll compare
    for(let i = 1; i < 10000; i++) {
        arr1.push(arr1[i-1]);
        arr1[i] += v1;

        arr2.push(arr2[i-1]);
        arr2[i] += v2;
    }

    //compare the arrays
    for(let i = 0; i < arr1.length; i++) {
        if(arr1[i] == arr2[i]) {
            res = "YES";
        }
    }

    //console.log(res); //delete

    return res;
    
    
}



kangaroo(x1, v1, x2, v2);