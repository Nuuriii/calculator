let displayValue = "";

function addToDisplay(value) {
  displayValue += value;
  document.getElementById("display").value = displayValue;
}

function clearDisplay() {
  displayValue = "";
  document.getElementById("display").value = displayValue;
}

function calculate() {
  let result = eval(displayValue);
  document.getElementById("display").value = result;
  displayValue = result.toString();
}
// let displayValue = "";

// function addToDisplay(value) {
//   displayValue += value;
//   document.getElementById("display").value = displayValue;
// }

// function clearDisplay() {
//   displayValue = "";
//   document.getElementById("display").value = displayValue;
// }

// function calculate() {
//   let result = eval(displayValue);
//   document.getElementById("display").value = result;
//   displayValue = result.toString();
// }
