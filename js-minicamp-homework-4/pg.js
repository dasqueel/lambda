function multiplyArguments() {
  // use the arguments keyword to multiply all of the arguments together and return the product
  // if no arguments are passed in return 0
  // if one argument is passed in just return it
  // if (arguments.length == 0) {
  //   return 0;
  // }
  // arguments.reduce(function(a,b){return a*b;});
  return [].slice.call(arguments).reduce(function(a,b){return a*b;});
}

// console.log(multiplyArguments(1,2,3,4));
var strArr = "hurricanes".split("");
var reversedArr = strArr.reverse();
var reversedStr = reversedArr.join("");
// console.log(reversedStr);

function nFactorial(n) {
  // return the factorial for n
  // solve this recursively
  // example:
  // the factorial of 3 is 6 (3 * 2 * 1)
  if (n === 0) return 1;

  return n * nFactorial(n-1);
}

// console.log(nFactorial(7))

var numbers = [1,2,3,4]

console.log(numbers.reduce(function(a,b){return a*b;}))