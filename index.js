const digit7 = document.querySelector('#digit7');
const digit8 = document.querySelector('#digit8');
const digit9 = document.querySelector('#digit9');
const multiply = document.querySelector('#multiply');
const digit4 = document.querySelector('#digit4');
const digit5 = document.querySelector('#digit5');
const digit6 = document.querySelector('#digit6');
const subtract = document.querySelector('#subtract');
const digit1 = document.querySelector('#digit1');
const digit2 = document.querySelector('#digit2');
const digit3 = document.querySelector('#digit3');
const add = document.querySelector('#add');
const equals = document.querySelector('#equals');
const result = document.querySelector('#result');

let firstNumber = 0;
let secondNumber = 0;
let operation = '';
let startBuildingSecondNumber = false;

function buildNumber(digit) {
    if (startBuildingSecondNumber === true) {
        secondNumber = secondNumber * 10 + digit;
        result.innerHTML += digit;
    } else {
        firstNumber = firstNumber * 10 + digit;
        result.innerHTML = firstNumber;
    }
}

function handleMultiplyClick() {
    operation = 'multiply';
    startBuildingSecondNumber = true;
    result.innerHTML += '*';
}

function handleSubtractClick() {
    operation = 'subtract';
    startBuildingSecondNumber = true;
    result.innerHTML += '-';
}

function handleAddClick() {
    operation = 'add';
    startBuildingSecondNumber = true;
    result.innerHTML += '+';
}

function handleEqualsClick() {
    result.innerHTML += '=';
    if (operation === 'multiply') {
        const multiplication = firstNumber * secondNumber;
        result.innerHTML += multiplication;
    } else if (operation === 'subtract') {
        const subtraction = firstNumber - secondNumber;
        result.innerHTML += subtraction;
    } else if (operation === 'add') {
        const addition = firstNumber + secondNumber;
        result.innerHTML += addition;
    }
    //reset calculator
    firstNumber = 0;
    secondNumber = 0;
    operation = '';
    startBuildingSecondNumber = false;
}

digit7.addEventListener('click', function () {
    buildNumber(7);
});
digit8.addEventListener('click', function () {
    buildNumber(8);
});
digit9.addEventListener('click', function () {
    buildNumber(9);
});
digit4.addEventListener('click', function () {
    buildNumber(4);
});
digit5.addEventListener('click', function () {
    buildNumber(5);
});
digit6.addEventListener('click', function () {
    buildNumber(6);
});
digit1.addEventListener('click', function () {
    buildNumber(1);
});
digit2.addEventListener('click', function () {
    buildNumber(2);
});
digit3.addEventListener('click', function () {
    buildNumber(3);
});
multiply.addEventListener('click', handleMultiplyClick);
subtract.addEventListener('click', handleSubtractClick);
add.addEventListener('click', handleAddClick);
equals.addEventListener('click', handleEqualsClick);
