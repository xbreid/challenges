// Iterative
const fibonacci = num => {
  // store the Fibonacci sequence you're going
  // to generate inside an array and
  // initialize the array with the first two
  // numbers of the sequence
  const result = [0, 1]

  for(let i = 2; i <= num; i++) {
    // push the sum of the two numbers
    // preceding the position of i in the result array
    // at the end of the result array
    const prevNum1 = result[i - 1]
    const prevNum2 = result[i - 2]
    result.push(prevNum1 + prevNum2)
  }
  // return the last value in the result array
  return result[num]
}


// Recursive
// O(2^n)
const rFibonacci = num => {
  // if num is either 0 or 1 return num
  if(num < 2) return num;
  // recursion here
  return fibonacci(num - 1) + fibonacci(num - 2);
}

console.log('Fibonacci: ', rFibonacci(12))