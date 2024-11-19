function evenOdd(n) {
  if (Math.floor(n % 2 === 0)) {
    return "Even";
  } else return "Odd";
}

let result = evenOdd(2);
console.log(result);
