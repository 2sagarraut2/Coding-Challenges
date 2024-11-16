function printPyramid(n) {
  for (let i = 1; i <= n; i++) {
    const spaces = " ".repeat(n - i);
    const stars = "*".repeat(2 * i - 1);
    console.log(spaces + stars);
  }
}

printPyramid(5);
