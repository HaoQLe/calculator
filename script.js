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

window.addEventListener('keydown', keyboardInput);
clearBtn.addEventListener('click', clearDisplay);
deleteBtn.addEventListener('click', deleteChar);
dotBtn.addEventListener('click', appendPoint);
equalsBtn.addEventListener('click', evaluate);

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

function clearDisplay() {
    operandOne = '';
    operandTwo = '';
    currOperator = null;

    currScreen.textContent = '0';
    prevScreen.textContent = '';
}

function deleteChar() {
    currScreen.textContent = currScreen.textContent.slice(0, -1);
}

function appendNumber(n) {
    if (currScreen.textContent === "0" || shouldResetScreen) {
        resetScreen();
    }

    currScreen.textContent += n;
}

function appendPoint() {
    if (shouldResetScreen) {
        resetScreen()
    }

    if (currScreen.textContent === '') {
        currScreen.textContent = '0';
    }

    if (currScreen.textContent.includes('.')) {
        return;
    }

    currScreen.textContent += '.';
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
    if (currScreen.textContent === '') {
        alert("Input is empty!");
        return;
    }

    if (currOperator === null || shouldResetScreen) {
        return;
    }

    if (currOperator === '÷' && (currScreen.textContent === '0' || currScreen.textContent === '0.')) {
        alert("You cannot divide by zero!");
        return;
    }

    operandTwo = currScreen.textContent;
    prevScreen.textContent = `${operandOne} ${currOperator} ${operandTwo} =`;
    console.log(operate(operandOne, operandTwo, currOperator));
    currScreen.textContent = operate(operandOne, operandTwo, currOperator);
    currOperator = null;
}

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

function keyboardInput(e) {
    if (e.key >= 0 && e.key <= 9) {
        appendNumber(e.key)
    }

    if (e.key === '.') {
        appendPoint();
    }

    if (e.key === 'Enter') {
        evaluate();
    }

    if (e.key === 'Backspace') {
        deleteChar();
    }

    if (e.key === 'Escape') {
        clearDisplay();
    }
}