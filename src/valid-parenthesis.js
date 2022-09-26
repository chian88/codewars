function validParentheses(parens) {
    // your code here ..
    let balance = 0;

    for (let i = 0; i < parens.length; i++) {
        if (parens.charAt(i) === '(') {
            balance += 1;
        } else if (parens.charAt(i) === ')') {
            balance -= 1;
        }

        if (balance < 0) {
            return false;
        }
    }


    return balance === 0;
  }