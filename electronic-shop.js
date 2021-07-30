console.log('testing');

function getMoneySpent(keyboards, drives, b) {
  //create a max variable
  var max = [];
  var temp = 0; // will temporarily hold the sum to evaluate

  for (let i = 0; i < keyboards.length; i++) {
    //console.log(keyboards[i]);
    for (let j = 0; j < drives.length; j++) {
      //console.log(drives[j] + keyboards[i]);
      temp = drives[j] + keyboards[i];
      if (temp <= b) {
        console.log(temp);
        max.push(temp);
      } else {
        max.push(-1);
      }
    }
  }

  //console.log(Math.max(...max));

  return Math.max(...max);
}

var b = 5;
var keyboards = [4];
var drives = [5];
console.log(getMoneySpent(keyboards, drives, b));
