function bonAppetit(bill, k, b) {
  // Write your code here
  let actual = 0;

  bill.splice(k, 1, 0);

  for (let i = 0; i < bill.length; i++) {
    actual += bill[i];
  }

  actual = actual / 2;

  return actual - b == 0 ? 'Bon Appetit' : b - actual;
}

var bill = [72, 53, 60, 66, 90, 62, 12, 31, 36, 94];
console.log(bill.length);
var k = 6;
var b = 288;
console.log(bonAppetit(bill, k, b));
