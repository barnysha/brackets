module.exports = function check(str, bracketsConfig) {
  // your solution
  let stack = [];
  
  for (let i=0; i<str.length; i++) {
    let current = str[i];
    let brackets = {
      ')':'(',
      '}':'{',
      ']':'[',
      '|':'|'
    };

    if(isCloseBrackets(current)) {
        if(brackets[current] !== stack.pop()) return false;
    } else {
      stack.push(current);
    }

  }

  return stack.length === 0;

  function isCloseBrackets(char) {
      return [')', '}', ']', '|', '2', '4', '6', '7', '8'].indexOf(char) > -1;
  }

}
