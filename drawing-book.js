/*
n = length of the book
p = page the student wants to turn to
*/

function pageCount(n, p) {
  // Write your code here
  let start = 1;
  let endStart = n;
  let turned = 0;

  do {
    //if the first start + 1 is equal to this.page, than increase turned and
    if (start++ == p) {
      turned++;
      n = p;
    } else if (start + 2 == p) {
      turned++;
      n = p;
    } else if (endStart-- == p) {
      turned++;
      n = p;
    } else if (endStart - 2 == p) {
      turned++;
      n = p;
    }

    console.log(turned);
  } while (n != p);

  //console.log(turned);

  return turned;
}

// how many pages?
var n = 5;
// what page to turn to?
var p = 4;
pageCount(5, 3);
