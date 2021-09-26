const alphabet = "abcdefghijklmnopqrstuvwxyz";

// console.log([...arr.slice(shift), ...arr.slice(0,shift)]);

function rotateLeft(arr) {
  let first = arr.shift();
  arr.push(first);
  return arr;
}


function caesarCipher(s, k) {
  const alpha = alphabet.split("");
  const parsed = s.split("");
  const shifted = [...alpha];

  [...Array(k)].forEach((_, index) => {
    return rotateLeft(shifted);
  });

  // const shifted = [...alpha.slice(distance), ...alpha.slice(0, distance)];

  const map = new Map();
  alpha.forEach((item, index) => {
    map.set(item, shifted[index]);
  });

  const cypher = parsed.map((item) => {
    if (item.match(/[a-z]/)) {
      return map.get(item.toLowerCase());
    }
    if (item.match(/[A-Z]/)) {
      return map.get(item.toLowerCase()).toUpperCase();
    }
    return item;
  });

  return cypher.join("");
}

console.log(caesarCipher("159357fwzx", 98));