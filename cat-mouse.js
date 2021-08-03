console.log('testing - hello world');
var catA = 2; //x
var catB = 5; //y
var mouse = 4; //z

function catAndMouse(x, y, z) {
  // write code
  //Math.abs() will find the absolute value, uncomment below to see example
  //console.log(Math.abs(5 - 9));
  //console.log(Math.abs(10 - 9));

  let a = Math.abs(x - z),
    b = Math.abs(y - z);
  let str = 'empty';

  if (a == b) {
    str = 'Mouse C';
  } else if (a < b) {
    str = 'Cat A';
  } else {
    str = 'Cat B';
  }

  return str;
}

catAndMouse();
