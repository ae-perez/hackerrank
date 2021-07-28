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

var bill = [3, 10, 2, 9];
console.log(bill.length);
var k = 1;
var b = 12;
console.log(bonAppetit(bill, k, b));
