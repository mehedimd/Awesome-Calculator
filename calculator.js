function getValue(v) {
  let display = document.getElementById("display");
  display.value += v;
}

function getOperatorValue(v) {
  let display = document.getElementById("display");
  let displayValue = display.value;

  let readLastCharacter = displayValue.slice(
    displayValue.length - 1,
    displayValue.length
  );

  let match = readLastCharacter.match(/[0-9]+/);
  if (match) {
    display.value += v;
  } else {
    display.value = display.value.slice(0, displayValue.length - 1) + v;
  }
}

// Backspace X
function getBackspace() {
  let display = document.getElementById("display");
  let sliceValue = display.value.slice(0, display.value.length - 1);
  display.value = sliceValue;
}

// Clear Display
function clearValue() {
  document.getElementById("display").value = "";
}

// Display Result
function getResult() {
  let displayValue = document.getElementById("display").value;
  let result = eval(displayValue);
  document.getElementById("display").value = result;
}
