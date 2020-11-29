const grades = [73, 67, 38, 33];

function gradingStudent(grades) {
    let length = grades.length;

    for(let i = 0; i < length; i++) {
        //any grade less than 40 = fail + no change
        if(grades[i] < 38) {
            grades[i] = grades[i];
        } else {
            //now solve for the next multiple of 5
            let n = Math.ceil(grades[i]/5) * 5;
            if(n - grades[i] < 3) {
                grades[i] = n;
            } else if (n - grades[i] == 3) {
                grades[i] = grades[i];
            }
        }
    }

    return grades;
}

let results = gradingStudent(grades);

console.log(results.join("\n"));