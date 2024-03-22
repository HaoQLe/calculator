// Retrieve buttons
const clearBtn = document.getElementById('clearBtn');
const deleteBtn = document.getElementById('deleteBtn');
const numberBtns = document.querySelectorAll('.number');
const operatorBtns = document.querySelectorAll('.operator')



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
            break;
        case ('-'):
            return subtract(opOne, opTwo);
            break;
        case ('*'):
            return multiply(opOne, opTwo);
            break;
        case ('/'):
            return divide(opOne, opTwo);
            break;
    } 
}