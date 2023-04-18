// Functions for all of the basic math operations
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

// Store input from user
let firstNum;
let operator;
let secondNum;

// Store result of operation
let result;

// Function that operates depending on the user input
function operate(num1, symbol, num2) {
  if (symbol === '+') {
    return add(num1, num2);
  } if (symbol === '-') {
    return subtract(num1, num2);
  } if (symbol === '*') {
    return multiply(num1, num2);
  }
  return divide(num1, num2);
}

// Get first number and operator
const operatorBtns = document.querySelectorAll('.operator');
operatorBtns.forEach((operatorBtn) => {
  operatorBtn.addEventListener('click', () => {
    const operatorText = operatorBtn.textContent;
    firstNum = parseInt(displayArea.textContent);
    operator = operatorText;
    displayArea.textContent = '';
  });
});

// Get second number and display result
const equalBtn = document.querySelector('.operate');
equalBtn.addEventListener('click', () => {
  const secondOperand = displayArea.textContent;
  const secondOpClean = secondOperand.substring(1);
  secondNum = parseInt(secondOpClean);
  result = operate(firstNum, operator, secondNum);
  displayArea.textContent = result;
});

// Populate display
const displayBtns = document.querySelectorAll('.display-button');
const displayArea = document.getElementById('display');
displayBtns.forEach((displayBtn) => {
  displayBtn.addEventListener('click', () => {
    const buttonText = displayBtn.textContent;
    displayArea.textContent += buttonText;
  });
});

// Clear display
const clearBtn = document.querySelector('.clear');
clearBtn.addEventListener('click', () => {
  displayArea.textContent = '';
});
