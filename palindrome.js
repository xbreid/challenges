const palindrome = (str) => {
  // turn the string to lowercase
  str = str.toLowerCase();
  // reverse input string and return the result of the
  // comparisong
  return str === str.split("").reverse().join("");
};

console.log(palindrome("anna"));