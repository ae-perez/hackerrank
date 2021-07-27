/*  The player can jump on any cumulus cloud having a number that is equal to the number of the current cloud plus 1 or 2  */

function jumpingOnClouds(c) {
  let jumps = 0;
  let index = 0;

  do {
    // code below
    jumps++;

    //the below translates to, in plain english:
    // the index EQUALS to, if the array at index + 2 is equal to 0, than add 2 to the index, otherwise just add 1
    index = c[index + 2] == 0 ? index + 2 : index + 1;
  } while (index < c.length - 1);

  return jumps;
}

var c = [0, 0, 0, 0, 1, 0];

console.log(jumpingOnClouds(c));
