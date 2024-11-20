function countoccurances(str, c) {
  let occurances = 0;
  for (let element of str) {
    if (element === c) {
      occurances = occurances + 1;
    }
  }
  return occurances;
}

let str = "sagar raut";
let char = "a";
let result = countoccurances(str, char);
console.log(
  "The number of occurrences of the character '" +
    char +
    "' in the string '" +
    str +
    "' is " +
    result
);
