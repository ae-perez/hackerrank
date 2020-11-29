function compareTriplets(a, b) {
    const c = [0, 0]; //will hold the return values

    for (let i = 0; i < a.length; i++) {
        if (a[i] > b[i]) {
            c[0] += 1;

        } else if (a[i] < b[i]) {
            c[1] += 1;
        }
    }

    return c[0] + ' ' + c[1]; //for hackerrank: return c;
}

const a = [17, 28, 30];
const b = [99, 16, 8];
const results = compareTriplets(a,b);
console.log(results);

