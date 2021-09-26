const findVowels = (str) => {
  const matched = str.match(/[aeiou]/gi);
  return matched;
}

console.log('Vowels: ', findVowels('Hello old chap'));