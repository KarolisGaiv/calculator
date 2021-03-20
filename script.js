// -------Global variables-------
let input = "";
let displayValue;

// ----- Selectors--------
const numbers = document.querySelectorAll(".number");
const calcDisplay = document.querySelector(".calculator-field");

// ------ Event listeners --------
numbers.forEach((number) => {
  number.addEventListener("click", () => {
    setInput(number.innerHTML);
    showInput(input);
  });
});

// ----------  Functions -----------

function add(a, b) {
  return a + b;
}

function substract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function operate(operator, num1, num2) {
  return operator(num1, num2);
}

function setInput(button) {
  input = input.concat(button);
  return input;
}

function showInput(value) {
  calcDisplay.innerHTML = value;
}
