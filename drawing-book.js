/*
n = length of the book
p = page the student wants to turn to
*/

function pageCount(n, p) {
  // Write your code here

  return Math.min(Math.trunc(p / 2), Math.trunc(n / 2) - Math.trunc(p / 2));
}

// how many pages?
var n = 6;
// what page to turn to?
var p = 5;
console.log(pageCount(n, p));
