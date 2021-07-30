console.log('testing');

function getMoneySpent(keyboards, drives, b) {
  var max = -1; //default value - return this if not purchasable
  var temp = 0; // will temporarily hold the sum to evaluate

  //nested for loop, to go through both arrays
  for (let i = 0; i < keyboards.length; i++) {
    for (let j = 0; j < drives.length; j++) {
      //temp will hold the added values to compare
      temp = drives[j] + keyboards[i];

      //if both added together equal to or is less than the budget, figure out the max of those two and set the max value to 'max'
      if (drives[j] + keyboards[i] <= b) {
        max = Math.max(max, temp);
      }
    }
  }

  return max;
}

var b = 5;
var keyboards = [4];
var drives = [5];
console.log(getMoneySpent(keyboards, drives, b));
