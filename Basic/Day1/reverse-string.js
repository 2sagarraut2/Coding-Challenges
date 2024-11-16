function reverseString(s) {
  let result = [];
  let reverseString = "";
  for (let char of s) {
    result.push(char);
  }
  for (i = result.length - 1; i >= 0; i--) {
    reverseString = reverseString + result[i];
  }
  return reverseString;
}

const returnedString = reverseString("hello");
console.log(returnedString);
