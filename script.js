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
const clearBtn = document.querySelector("#clear");

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

clearBtn.addEventListener("click", clear);

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
      result = "Err";
      showInput(result);
      console.log("Error");
  }
}

function setInput(button) {
  input = input.concat(button);
  return input;
}

function resetInput() {
  input = "";
  showInput(0);
}

function showInput(value) {
  calcDisplay.innerHTML = value;
}

function saveOperator(action) {
  savedOperator = action;
}

function clear() {
  resetInput();
  firstValue = "";
  savedOperator = "";
}
