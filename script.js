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

clearBtn.addEventListener('click', () => console.log("clear"));
deleteBtn.addEventListener('click', () => console.log("delete"));
dotBtn.addEventListener('click', () => console.log("dot"));
equalsBtn.addEventListener('click', () => console.log("equals"));

numberBtns.forEach((button) => {
    button.addEventListener('click', () => appendNumber(button.textContent));
});

operatorBtns.forEach((button) => {
    button.addEventListener('click', () => appendOperator(button.textContent));
});


function appendNumber(n) {
    if (currScreen.textContent === "0") {
        currScreen.textContent = n;
    } else {
        currScreen.textContent += n;
    }
}

function appendOperator(operator) {
    prevScreen.textContent = `${currScreen.textContent} ${operator} `
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
    switch (operator) {
        case ('+'):
            return add(opOne, opTwo);
        case ('-'):
            return subtract(opOne, opTwo);
        case ('*'):
            return multiply(opOne, opTwo);
        case ('/'):
            return divide(opOne, opTwo);
    } 
}