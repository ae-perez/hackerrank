function equalizeArray(arr) {
  // use an object -- you'll use it to create a 'dictionary'
  let obj = {};
  let max = 0;
  for (let i of arr) {
    //translation: for every 'i'(item) of the arr array .. loop through
    if (obj[i]) {
      obj[i]++;
    } else {
      // if this object doesn't exist, create it and initiate to vale of 1
      obj[i] = 1;
    }
  }

  let newArr = Object.values(obj);

  max = Math.max(...newArr); //the number of times the common value appears

  return arr.length - max;
}

var arr = [3, 3, 2, 1, 3];
console.log(equalizeArray(arr));
