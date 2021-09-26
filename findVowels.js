const findVowels = str => {
  const matched = str.match(/[aeiou]/gi);
  return matched ? matched.length : 0;
}

console.log(findVowels('Hello old chap'));