let operandOne = '';
let operandTwo = '';
let currOperator = null;
let shouldResetScreen = false;

// Retrieve buttons
const clearBtn = document.getElementById('clearBtn');
const deleteBtn = document.getElementById('deleteBtn');
const dotBtn = document.getElementById('dotBtn');
const equalsBtn= document.getElementById('equalsBtn');

const numberBtns = document.querySelectorAll('.number');
const operatorBtns = document.querySelectorAll('.operator')

// Retrieve screens
const currScreen = document.getElementById('currScreen');
const prevScreen = document.getElementById('prevScreen');

clearBtn.addEventListener('click', () => clear());
deleteBtn.addEventListener('click', () => console.log("delete"));
dotBtn.addEventListener('click', () => console.log("dot"));
equalsBtn.addEventListener('click', () => evaluate());

numberBtns.forEach((button) => {
    button.addEventListener('click', () => appendNumber(button.textContent));
});

operatorBtns.forEach((button) => {
    button.addEventListener('click', () => setOperation(button.textContent));
});

function resetScreen() {
    currScreen.textContent = '';
    shouldResetScreen = false;
}

function clear() {
    operandOne = '';
    operandTwo = '';
    currOperator = null;

    currScreen.textContent = '0';
    prevScreen.textContent = '';
}

function appendNumber(n) {
    if (currScreen.textContent === "0" || shouldResetScreen) {
        resetScreen();
    }

    currScreen.textContent += n;
}

function setOperation(operator) {
    if (currOperator !== null) {
        evaluate()
    }

    operandOne = currScreen.textContent;
    currOperator = operator;
    prevScreen.textContent = `${currScreen.textContent} ${operator}`
    shouldResetScreen = true;
}

function evaluate() {
    if (currOperator === null || shouldResetScreen) {
        return
    }

    if (currOperator === '÷' && currScreen.textContent === '0') {
        alert("You cannot divide by zero!");
        return;
    }

    operandTwo = currScreen.textContent;
    prevScreen.textContent = `${operandOne} ${currOperator} ${operandTwo} =`;
    console.log(operate(operandOne, operandTwo, currOperator));
    currScreen.textContent = operate(operandOne, operandTwo, currOperator);
    currOperator = null;
}


let opOne; // Op for operand
let opTwo;
let operator;

function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

function divide(x, y) {
    return x / y;
}

function operate(opOne, opTwo, operator) {
    opOne = Number(opOne);
    opTwo = Number(opTwo);

    switch (operator) {
        case ('+'):
            return roundResult(add(opOne, opTwo));
        case ('-'):
            return roundResult(subtract(opOne, opTwo));
        case ('×'):
            return roundResult(multiply(opOne, opTwo));
        case ('÷'):
            return roundResult(divide(opOne, opTwo));
    } 
}

function roundResult(n) {
    return Math.round(n * 1000) / 1000;
}