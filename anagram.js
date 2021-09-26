// two string with same chars in diff order
// "iceman", "cinema"
const isAnagram = (str1, str2) => {
  const normalize = (str) =>
    str
      .toLowerCase()
      .replace(/[^a-z0-9]/gi, "") // trim out any non Int/Alphabetical Characters
      .split("") // turn into an array
      .sort() // sort the array
      .join(""); // turn it back into a string
  return normalize(str1) === normalize(str2); // check to see if strings are equal
};

console.log('Anagram: ', isAnagram("iceman", "cinema"));
// console.log(isAnagram("madam", "madam"));