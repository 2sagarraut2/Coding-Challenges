function largetElement(arr) {
  // declare a variable to store max value as first value of array
  let max = arr[0];

  for (let element of arr) {
    // check if element is greater than max
    element > max ? (max = element) : max;
  }
  return max;
}

// let arr = [-1, 3, 5, 7, 2, 8];

let arr = [-6, -2, -3, -1, 0];

let result = largetElement(arr);
console.log("Larget Element is " + result);
