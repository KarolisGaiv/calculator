// -------Global variables-------
let input = "";
let result;
let firstValue;
let savedOperator;

// ----- Selectors--------
const numbers = document.querySelectorAll(".number");
const calcDisplay = document.querySelector(".calculator-field");
const addBtn = document.querySelector("#add");
const calcBtn = document.querySelector("#calculate");

// ------ Event listeners --------
numbers.forEach((number) => {
  number.addEventListener("click", () => {
    setInput(number.innerHTML);
    showInput(input);
  });
});

addBtn.addEventListener("click", (e) => {
  firstValue = input;
  saveOperator(e.target.id);
  resetInput();
});

calcBtn.addEventListener("click", () => {
  const secondValue = input;
  operate(savedOperator, firstValue, secondValue);
});

// ----------  Functions -----------

function add(a, b) {
  result = a + b;
  return result;
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

// = mygtuko funkcija
function operate(operator, num1, num2) {
  const a = parseInt(num1);
  const b = parseInt(num2);
  if (operator === "add") {
    console.log(add(a, b));
  } else {
    console.log("don't give up!!!");
  }
}

function setInput(button) {
  input = input.concat(button);
  return input;
}

function resetInput() {
  input = "";
  showInput(input);
}

function showInput(value) {
  calcDisplay.innerHTML = value;
}

function saveOperator(action) {
  savedOperator = action;
}
