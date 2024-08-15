module.exports = function check(str, bracketsConfig) {
  // your solution
  let stack = [];
  
  for (let i=0; i<str.length; i++) {
    let current = str[i];
    let brackets = {
      ')':'(',
      '}':'{',
      ']':'[',
      '|':'|',
      '1':'1'
    };

    if(isCloseBrackets(current)) {
        if(brackets[current] !== stack.pop()) return false;
    } else {
      stack.push(current);
    }

  }

  return stack.length === 0;

  function isCloseBrackets(char) {
      return [')', '}', ']', '|', '1', '2', '3', '4', '5', '6', '7', '8', '9'].indexOf(char) > -1;
  }

}
