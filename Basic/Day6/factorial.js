function findFactorial(n) {
  let fact = 1;

  while (n > 0) {
    fact = fact * n;
    n = n - 1;
  }

  return fact;
}

let result = findFactorial(5);
console.log("Factorial is " + result);
