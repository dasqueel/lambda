// arr = [1,2,3,4];

// addOne = function(x) { return x+1;}
// console.log(arr.map(addOne))
 // num = 10
// console.log(20 < num && num < 50);

// console.log(num === 5 || num === 10);
// var numbers = [1,2,3,4];
// var max = Math.max(...numbers);
// console.log(max);
// arr = [1,2,3,4]
// arr.unshift('hi')
// console.log(arr)

function isPrime(num) {
  // return true if num is prime.
  // otherwise return false
  // hint: a prime number is only evenly divisible by itself and 1
  // hint2: you can solve this using a for loop
  // note: 0 and 1 are NOT considered prime numbers
  if (num <= 1) {
    return false;
  }

  for (var i=2; i<num/2; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(isPrime(5));
console.log(isPrime(8));
console.log(isPrime(1));