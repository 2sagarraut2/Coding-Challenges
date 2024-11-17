function sumOfDigits(n) {
  // varibale to store sum
  let sum = 0;

  // while loop to check if n is > 0
  while (n > 0) {
    // adding to sum by doing a mod to get last digit of number
    sum = sum + (n % 10);
    // removing last digit of number which is added to sum, using Math.floor to ignore decimal values
    n = Math.floor(n / 10);
  }

  return sum;
}

const result = sumOfDigits(1234);
console.log(result);
