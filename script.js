// -------Global variables-------
let input = "";
let result;
let firstValue;
let savedOperator;
let previousValue;

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
    if(result !== "" && savedOperator === undefined) {
      clearData();
    }
    setInput(number.innerHTML);
    calcDisplay.classList.add("populated");
    showInput(input);
  });
});

operatorBtns.forEach((operator) => {
  operator.addEventListener("click", (e) => {
    if (input === "") {
      return;
    }
    if (firstValue !== "" && savedOperator !== "") {
      console.log("Tikrinimas pavyko");
      operate(savedOperator, firstValue, input);
    }
    firstValue = input;
    saveOperator(e.target.id);
    resetInput();
    calcDisplay.classList.remove("populated");
  });
});

calcBtn.addEventListener("click", () => {
  const secondValue = input;
  if (result !== "" && savedOperator !== "") {
    showInput(result);
    calcDisplay.classList.add("populated");
  }
  if (secondValue === "") {
    return;
  }
  operate(savedOperator, firstValue, secondValue);
});

clearBtn.addEventListener("click", clearData);

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
  if (b === 0) {
    return "Undefined";
  }
  return a / b;
}

function operate(operator, num1, num2) {
  const a = parseInt(num1);
  const b = parseInt(num2);
  switch (operator) {
    case "add":
      result = add(a, b);
      showInput(result);
      input = result;
      console.log(`input: ${input}`);
      savedOperator = undefined;
      console.log(`savedOpetaror: ${savedOperator}, result is ${result}`);
      break;
    case "substract":
      result = substract(a, b);
      showInput(result);
      input = result;
      savedOperator = undefined;
      break;
    case "multiply":
      result = multiply(a, b);
      showInput(result);
      input = result;
      savedOperator = undefined;
      break;
    case "divide":
      result = divide(a, b);
      showInput(result);
      input = result;
      savedOperator = undefined;
      break;
    default:
      return;
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

function clearData() {
  resetInput();
  firstValue = "";
  savedOperator = "";
  result = undefined;
}
