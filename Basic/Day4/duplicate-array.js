function removeDeplicate(arr) {
  //   traversing,comparing and removing dupicate elements
  return arr.filter((value, index) => arr.indexOf(value) === index);
}

let arr = [1, 2, 2, 3, 4, 4, 5];
let result = removeDeplicate(arr);
console.log(result);
