const container = document.querySelector('#container');

const add = (term1, term2) => {
    return term1 + term2;
}

const subtract = (term1, term2) => {
    return term1 - term2;
}

const multiply = (term1, term2) => {
    return term1 * term2;
}

const divide = (term1, term2) => {
    return term1 / term2;
}


const operate = (operator, num1, num2) => {
    switch(operator){
        case '+':
            return add(num1, num2);
        case '-':
            return subtract(num1, num2);
        case '*':
            return multiply(num1, num2);
        case '/':
            return divide(num1, num2);
        default:
            return alert('insert a valid operator');
    };
};
