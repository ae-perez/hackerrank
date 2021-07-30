console.log('testing');

function getMoneySpent(keyboards, drives, b) {
  //create a max variable
  var max = -1; //default value
  var temp = 0; // will temporarily hold the sum to evaluate

  for (let i = 0; i < keyboards.length; i++) {
    for (let j = 0; j < drives.length; j++) {
      temp = drives[j] + keyboards[i];
      if (drives[j] + keyboards[i]) {
        max = Math.max(max, temp);
      }
    }
  }

  //console.log(Math.max(...max));

  return max;
}

var b = 5;
var keyboards = [4];
var drives = [5];
console.log(getMoneySpent(keyboards, drives, b));
