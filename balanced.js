 function areBracketsBalanced(expr) {
  let stack = [];
  const balanceMap = new Map();
  const openSet = new Set(['(', '[', '{']);
  const closeSet = new Set([')', ']', '}']);

  balanceMap.set('(', ')');
  balanceMap.set('[', ']');
  balanceMap.set('{', '}');

  // Traversing the Expression
  for(let i = 0; i < expr.length; i++) {
    let value = expr.charAt(i);

    if (openSet.has(value)) {
      stack.push(value);
      continue;
    }

    if (stack.length == 0) return false;
          
    let check;
    
    switch (value) {
      case ')':
        check = stack.pop();
        if (check == '{' || check == '[')
          return false;
        break;
      case '}':
        check = stack.pop();
        if (check == '(' || check == '[')
          return false;
        break;
      case ']':
        check = stack.pop();
        if (check == '(' || check == '{')
          return false;
        break;
    }
  }

  // Check Empty Stack
  return (stack.length == 0);
}
 
// Driver code
let expr = "([{}])";
 
// Function call
if (areBracketsBalanced(expr))
    console.log("Balanced ");
else
    console.log("Not Balanced ");