// -------Global variables-------
let input = "";
let result;
let firstValue;
let savedOperator;

// ----- Selectors--------
const numbers = document.querySelectorAll(".number");
const calcDisplay = document.querySelector(".calculator-field");
const operatorBtns = document.querySelectorAll(".operator");
const addBtn = document.querySelector("#add");
const calcBtn = document.querySelector("#calculate");

// ------ Event listeners --------
numbers.forEach((number) => {
  number.addEventListener("click", () => {
    setInput(number.innerHTML);
    showInput(input);
  });
});

operatorBtns.forEach((operator) => {
  operator.addEventListener("click", (e) => {
    firstValue = input;
    saveOperator(e.target.id);
    resetInput();
  });
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
  switch (operator) {
    case "add":
      result = add(a, b);
      showInput(result);
      break;
    case "substract":
      result = substract(a, b);
      showInput(result);
      break;
    case "multiply":
      result = multiply(a, b);
      showInput(result);
      break;
    case "divide":
      result = divide(a, b);
      showInput(result);
      break;
    default:
      console.log("Don't give up!");
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
