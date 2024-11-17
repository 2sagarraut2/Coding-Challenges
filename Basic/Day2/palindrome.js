function checkPalindrome(s) {
  // declared string to store reverse string
  let reverseString = "";

  // reverse the string
  for (i = s.length - 1; i >= 0; i--) {
    reverseString = reverseString + s[i];
  }
  //   check if reversed String is same as that of given string
  if (s == reverseString) {
    return true;
  } else return false;
}

const result = checkPalindrome("madam");
result
  ? console.log("String is palindrome")
  : console.log("String is not palindrome");
