function findPrime(n) {
  if (n > 1) {
    for (i = 2; i < n; i++) {
      if (n % i) {
        return false;
      } else {
        return true;
      }
    }
  } else return false;
}

let result = findPrime(11);
result ? console.log("Not Prime") : console.log("Prime");
