function secondLargestNumber(arr) {
  if (arr.length < 2) {
    throw new Error("Array must have at least two elements.");
  }

  let max = -Infinity;
  let secondMax = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      // Update secondMax before changing max
      secondMax = max;
      max = arr[i];
    } else if (arr[i] > secondMax && arr[i] !== max) {
      secondMax = arr[i];
    }
  }
  return secondMax;
}

let arr = [10, 20, 4, 45, 99, 101];
let result = secondLargestNumber(arr);
console.log(result);
