/*
n = length of the book
p = page the student wants to turn to
*/

function pageCount(n, p) {
  // Write your code here

  console.log(Math.min(p % 2));
  return Math.min(Math.trunc(p / 2), Math.trunc(n / 2 - p / 2));
}

// how many pages?
var n = 5;
// what page to turn to?
var p = 4;
pageCount(5, 3);
