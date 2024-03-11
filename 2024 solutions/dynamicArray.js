function dynamicArray(n, queries) {
  // Write your code here
  let arr = []; //create array that we can build based on n value
  let lastAnswer = 0;
  let answers = [];

  for (let i = 0; i < n; i++) {
    arr[i] = []; //creating new arrays at this index
  }

  const getIndex = (x) => {
    // n is coming from n, queries -> the most outer function
    return (x ^ lastAnswer) % n;
  };

  const queryOne = (x, y) => {
    let i = getIndex(x);
    arr[i].push(y);
  };

  const queryTwo = (x, y) => {
    let i = getIndex(x);
    let l = arr[i].length;
    let z = y % l;
    lastAnswer = arr[i][z];
    answers.push(lastAnswer);
  };

  for (let q of queries) {
    // each of the queries as strings
    //check if the first element in queries is of type 1 or 2
    // this will tell which query to run after
    if (q[0] === 1) {
      queryOne(q[1], q[2]);
    } else if (q[0] === 2) {
      queryTwo(q[1], q[2]);
    }
  }

  return answers;
}
