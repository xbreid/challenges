require('./caesarCipher');
require('./regex');
require('./anagram');
require('./palindrome');
require('./fizzbuzz');
require('./findVowels');
require('./fibonacci');
require('./pangram');
require('./reversals');

const dups = 'aawwefvlkjtjjtlkjttjtj';

const dupSet = new Set(dups.split(''));

console.log([...dupSet].join(''));

const list = [
  { value: 2 },
  { value: 12 },
  { value: 4},
]

list.sort((a, b) => (a.value > b.value) ? 1 : -1)

console.log(list);
console.log(list.find((value) => value.value === 2));

const newStr = dups.split('').map((char) => {
  if (char === 'a') {
    return '';
  }
  return char;
})

console.log(newStr.join(''));

const charMap = new Map();

dups.split('').forEach((char) => {
  if (charMap.has(char)) {
    charMap.set(char, charMap.get(char) + 1);
  } else {
    charMap.set(char, 1);
  }
})

let winner = { key: '', value: 0 };

charMap.forEach((value, key) => {
  if (value > winner.value) {
    winner.value = value;
    winner.key = key;
  }
})

console.log(winner);

console.log([...dups.matchAll(/a(a)ww/i)]);