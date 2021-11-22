const palindrome = (str) => {
  // turn the string to lowercase
  str = str.toLowerCase();
  // reverse input string and return the result of the
  // comparisong
  return str === str.split("").reverse().join("");
};

console.log(palindrome("anna"));

function validatePalindromePermutation(string) {
  const charMap = new Map();
  const normStr = string.toLowerCase();
  
  for (let i = 0; i < normStr.length; i++) {
    const char = normStr[i];
    
    if (char !== " ") {
      if (charMap.has(char)) {
        charMap.set(char, charMap.get(char) + 1);
      } else {
        charMap.set(char, 1);
      }
    }
  }

  let hasFoundOddFreq = false;

  charMap.forEach((value) => {
    if (value % 2 !== 0) {
      if (hasFoundOddFreq) {
        return false;
      } else {
        hasFoundOddFreq = true;
      }
    }
  });

  return true;
}

const optPalindrome = (str) => {
  let leftIdx = 0;
  let rightIdx = str.length -  1;
  while (leftIdx < rightIdx) {
    if (str[leftIdx] !== str[rightIdx])  {
      return false;
    }
    leftIdx++;
    rightIdx--;
  }

  return true;
}

console.log("validate: ", validatePalindromePermutation("Tact Coa"))