const fizzBuzz = (num) => {
  for(let i = 1; i <= num; i++) {
    // check if the number is a multiple of 3 and 5
    if(i % 3 === 0 && i % 5 === 0) {
      console.log('fizzbuzz')
    } // check if the number is a multiple of 3
      else if(i % 3 === 0) {
      console.log('fizz')
    } // check if the number is a multiple of 5
      else if(i % 5 === 0) {
      console.log('buzz')
    } else {
      console.log(i)
    }
  }
}


const fizzbuzzOpt = (value) => {
  const fizzHash = {3: 'Fizz', 5: 'Buzz'};
  
  for (let i = 1; i <= value; i++) {
    let output = '';

    for (let num in fizzHash) {
      if (i % num === 0) {
        output += fizzHash[num]
      }
    }

    if (output === '') { output = i };
    console.log(output);
  }
}

console.log(fizzbuzzOpt(19));