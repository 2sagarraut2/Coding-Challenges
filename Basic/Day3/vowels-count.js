function vowelsCount(str) {
  let count = 0;

  for (let char of str) {
    if (
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u" ||
      char === "A" ||
      char === "E" ||
      char === "I" ||
      char === "O" ||
      char === "U"
    ) {
      count = count + 1;
    }
  }
  return count;
}

// let result = vowelsCount("hello world");
let result = vowelsCount("Sagar Raut");
console.log("There are " + result + " vowels");
