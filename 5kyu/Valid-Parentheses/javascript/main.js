function validParentheses(parens) {
    let stack = [];

    parens.split('').forEach(element => {
        if (element == ')' && stack[stack.length - 1] == '(') {
            stack.pop();
        } else {
            stack.push(element);
        }
    });

    return stack.length === 0;
}