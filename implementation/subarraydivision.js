const squares = [2, 5, 1, 3, 4, 4, 3, 5, 1, 1, 2, 1, 4, 1, 3, 3, 4, 2, 1];//[2, 2, 1, 3, 2];
let month = 7; //length
let day = 18; //sum


function birthday(s, d, m) {
    var count = 0;


    //s.length = 19
        //s.length - m = 12
            //s.length - m + 1 ----- this will go up gradually
    for (var i = 0; i < s.length - m + 1; i++){
        var sum = 0;

        for (var j = 0; j < m; j++){
            sum = sum + s[i + j];
        }
        if (sum == d) {
            count++;
        }
        
    }


    return count;
}


const result = birthday(squares, day, month);
console.log(result);