/*Create a function that checks if a number n is divisible by two numbers x AND y. All inputs are positive, non-zero numbers.*/

function isDivisible(n, x, y) {
    if ((n % y) == 0 && (n % x) == 0){
      return true
    } else {
      return false
    }
  }