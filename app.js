const container = document.querySelector('#container');

const add = (term1, term2) => {
    return Number(term1) + Number(term2);
}

const subtract = (term1, term2) => {
    return term1 - term2;
}

const multiply = (term1, term2) => {
    return Math.round((term1 * term2) * 100) / 100 ;
}

const divide = (term1, term2) => {
    if (term1 == '0' || term2 == '0'){
        alert('naughty naughty, "dont divide by 0"')
        return
    }
    return Math.round((term1 / term2) * 100) / 100 ;
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


let savedNumber = 0;
let operatorUsed;

const findAction = function(operation) {
    savedNumber = Number(calculatorDisplay.innerText);
    operatorUsed = operation;
    calculatorDisplay.innerText = '';
};

const addToDisplay = function(newNumber) {
    calculatorDisplay.innerText = calculatorDisplay.innerText + newNumber;
};

const clearAll = function() {
    savedNumber = 0;
    calculatorDisplay.innerText = '';
};

const evaluate = function() {
    let currentNumber = calculatorDisplay.innerText;
    let answer = operate(operatorUsed, savedNumber, currentNumber)
    calculatorDisplay.innerText = answer.toString()
    savedNumber = answer;
};

let calculator = document.createElement('div');
calculator.style = 'border-radius: 5px; background-color: grey; border: 1px solid black; height: 400px; width: 250px;'

let display = document.createElement('p');
display.style = 'overflow-x: scroll; text-align: right; font-size: clamp(10px, 30px, 30px);border-radius: 3px; border: 1px solid black; width: 80%; height: 20%; margin: 22px auto; background-color: white;';
display.innerText = ''

calculator.appendChild(display)

let buttonPart = document.createElement('div');
buttonPart.style = 'border: 1px solid black; margin: 22px ; height: 60%; width: 80%; border-radius: 3px; display:flex; '

let numberPart = document.createElement('div')
numberPart.style = 'background-color:orange; height: 100%; width: 75%; border-radius: 3px; display: flex; flex-wrap: wrap;'

let operatorPart = document.createElement('div');
operatorPart.style = 'background-color:blue; height: 100%; width: 25%; border-radius: 3px; display: flex; flex-wrap: wrap;'

buttonPart.appendChild(numberPart)
buttonPart.appendChild(operatorPart)
calculator.appendChild(buttonPart)

for (let i = 0; i < 12; i++) {
    let newNumberButton = document.createElement('button');



    let text = i
    if (i == 10) {
        text = 'C'
        newNumberButton.addEventListener('click', e => {
            clearAll()
        });
    } else if (i == 11) {
        text = '='
        newNumberButton.addEventListener('click', e => {
            evaluate()
        });
    } else {
        newNumberButton.addEventListener('click', e => {
            let newNumber = e.target.innerText;
            addToDisplay(newNumber)
        });
    }

    
    
    newNumberButton.style = 'width: 40px; height: 40px; margin: 5px; background-color: aquamarine;';
    newNumberButton.innerText = `${text}`;
    numberPart.appendChild(newNumberButton);
};

for (let i = 0; i < 4; i++) {
    let text = ''
    switch(i){
        case 0:
            text='+';
            break;
        case 1:
            text='-';
            break;
        case 2:
            text='*';
            break;
        case 3:
            text='/';
            break;
    }
    let newOperatorButton = document.createElement('button');
    newOperatorButton.addEventListener('click', e => {
        let operation = e.target.innerText;
        findAction(operation);
    });
    newOperatorButton.style = 'width: 40px; height: 40px; margin: 5px; background-color: aqua;';
    newOperatorButton.innerText = `${text}`;
    operatorPart.appendChild(newOperatorButton);
};

container.appendChild(calculator)

const calculatorDisplay = document.querySelector('p');
