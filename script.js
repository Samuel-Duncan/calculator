// Store input from user
let firstNum = '';
let operator = '';
let secondNum = '';
let result = '';

// DOM Items
const displayArea = document.getElementById('display');
const displayBtns = document.querySelectorAll('.display-button');
const operatorBtns = document.querySelectorAll('.operator');
const equalBtn = document.querySelector('.operate');
const clearBtn = document.querySelector('.clear');
const numberBtns = document.querySelectorAll('.number');
const deleteBtn = document.querySelector('.delete');
const decimalBtn = document.querySelector('.decimal');

// Functions for all of the math operations
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

// Function that operates depending on user input
function operate(num1, symbol, num2) {
  num1 = Number(num1);
  num2 = Number(num2);
  switch (symbol) {
    case '+':
      return add(num1, num2);
    case '-':
      return subtract(num1, num2);
    case '*':
      return multiply(num1, num2);
    case '/':
      return divide(num1, num2);
    default:
      return null;
  }
}

// Operator buttons
operatorBtns.forEach((operatorBtn) => {
  operatorBtn.addEventListener('click', () => {
    if (firstNum === '') {
      firstNum = displayArea.textContent;
      operator = operatorBtn.textContent;
      displayArea.textContent = '';
    } else if (firstNum && secondNum === '') {
      secondNum = displayArea.textContent;
      result = operate(firstNum, operator, secondNum);
      operator = operatorBtn.textContent;
      displayArea.textContent = result;
    } else {
      firstNum = result;
      secondNum = displayArea.textContent;
      result = operate(firstNum, operator, secondNum);
      displayArea.textContent = result;
      operator = operatorBtn.textContent;
    }
  });
});

// Equals button
equalBtn.addEventListener('click', () => {
  if (secondNum === '') {
    secondNum = displayArea.textContent;
    result = operate(firstNum, operator, secondNum);
    displayArea.textContent = result;
  } else {
    firstNum = result;
    secondNum = displayArea.textContent;
    result = operate(firstNum, operator, secondNum);
    displayArea.textContent = result;
  }
  firstNum = '';
  operator = '';
  secondNum = '';
  result = '';
});

numberBtns.forEach((numberBtn) => {
  numberBtn.addEventListener('click', () => {
    const displayAreaText = displayArea.textContent;
    if (displayAreaText.endsWith('+') || displayAreaText.endsWith('-') || displayAreaText.endsWith('*') || displayAreaText.endsWith('/')) {
      displayArea.textContent = '';
    }
  });
});

// Populate display
displayBtns.forEach((displayBtn) => {
  displayBtn.addEventListener('click', () => {
    const buttonText = displayBtn.textContent;
    displayArea.textContent += buttonText;
    checkDecimal();
  });
});

// Delete button
deleteBtn.addEventListener('click', () => {
  const displayAreaText = displayArea.textContent.slice(0, -1);
  displayArea.textContent = displayAreaText;
});

// Clear display
clearBtn.addEventListener('click', () => {
  displayArea.textContent = '';
  firstNum = '';
  operator = '';
  secondNum = '';
  result = '';
});

// Avoid multiple decimals
function checkDecimal() {
  if (displayArea.textContent.includes('.')) {
    decimalBtn.disabled = true;
  } else {
    decimalBtn.disabled = false;
  }
}
