/*
Very simple, given an integer or a floating-point number, find its opposite.

Examples:

1: -1
14: -14
-34: 34
*/

//My Solution

function opposite(num) {
    if (num > 0){
      return -Math.abs(num)
    } else if(num <= 0){
      return Math.abs(num)
    }
  };