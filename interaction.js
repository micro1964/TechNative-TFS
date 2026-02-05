function appendToDisplay(input) {
  const display = document.getElementById("display");
  display.value += input;
}

// clear display function that resets the display to an empty string (AC button)

function clearDisplay() {
  display.value = "";
}

// update the calculator display and automatically scroll it, useful for multi-line or long calculations
function updateDisplay(value) {
  const display = document.getElementById("display");
  display.value = value;
  display.scrollTop = display.scrollHeight;
}

// calculate function that evaluates the expression in the display and shows the result

function calculate() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
}

// backspace function that removes the last character from the display

function backspace() {
  const display = document.getElementById("display");
  display.value = display.value.slice(0, -1);
}

// toggle sign function that adds or removes a negative sign from the current number

function toggleSign() {
  let display = document.getElementById("display");

  if (display.value === "") return;

  if (display.value.startsWith("-")) {
    display.value = display.value.slice(1);
  } else {
    display.value = "-" + display.value;
  }
}

// percent function that calculates percentage based on the last number and operator

function percent() {
  let display = document.getElementById("display");
  let value = display.value;

  // Get last number (supports decimals)
  let match = value.match(/(\d+\.?\d*)$/);
  if (!match) return;

  let number = parseFloat(match[0]);

  // Find operator before the number
  let before = value.slice(0, -match[0].length);
  let operatorMatch = before.match(/([+\-*/])\s*$/);

  if (operatorMatch) {
    // % of the previous number
    let baseMatch = before.match(/(\d+\.?\d*)/g);
    if (!baseMatch) return;
    let base = parseFloat(baseMatch[baseMatch.length - 1]);
    let percentValue = (base * number) / 100;

    if (operatorMatch[1] === "+") {
      display.value = (base + percentValue).toString();
    } else if (operatorMatch[1] === "-") {
      display.value = (base - percentValue).toString();
    } else if (operatorMatch[1] === "*") {
      display.value = (base * percentValue).toString();
    } else if (operatorMatch[1] === "/") {
      display.value = (base / percentValue).toString();
    }
  } else {
    // Simple percent
    display.value = (number / 100).toString();
  }
}

function addPi() {
  const display = document.getElementById("display");

  // If empty, just insert pi
  if (display.value === "") {
    display.value = Math.PI;
    return;
  }

  // If last character is a number, auto-multiply
  if (/[0-9)]$/.test(display.value)) {
    display.value += "*" + Math.PI;
  } else {
    display.value += Math.PI;
  }
}
function square() {
  let display = document.getElementById("display");
  let value = display.value;

  // Get last number (including decimals and negatives)
  let match = value.match(/(-?\d+\.?\d*)$/);
  if (!match) return;

  let number = parseFloat(match[0]);
  let squared = number * number;

  // Replace last number with its square
  display.value = value.slice(0, -match[0].length) + squared;
}
function cube() {
  let display = document.getElementById("display");
  let value = display.value;

  // Match the last number (supports negatives & decimals)
  let match = value.match(/(-?\d+\.?\d*)$/);
  if (!match) return;

  let number = parseFloat(match[0]);
  let cubed = number * number * number;

  // Replace last number with its cube
  display.value = value.slice(0, -match[0].length) + cubed;
}

function sin() {
  let display = document.getElementById("display");
  let value = display.value;

  // Get last number (supports negatives & decimals)
  let match = value.match(/(-?\d+\.?\d*)$/);
  if (!match) return;

  let degrees = parseFloat(match[0]);
  let radians = (degrees * Math.PI) / 180;
  let result = Math.sin(radians);

  // Replace last number with sin(value)
  display.value = value.slice(0, -match[0].length) + result;
}

function cos() {
  let display = document.getElementById("display");
  let value = display.value;

  // Match the last number (negatives & decimals supported)
  let match = value.match(/(-?\d+\.?\d*)$/);
  if (!match) return;

  let degrees = parseFloat(match[0]);
  let radians = (degrees * Math.PI) / 180;
  let result = Math.cos(radians);

  // Replace last number with cos(value)
  display.value = value.slice(0, -match[0].length) + result;
}
function tan() {
  const display = document.getElementById("display");
  const value = display.value;

  // Match the last number (supports negatives & decimals)
  const match = value.match(/(-?\d+\.?\d*)$/);
  if (!match) return;

  const degrees = parseFloat(match[0]);
  const radians = (degrees * Math.PI) / 180;

  // Calculate tangent
  const result = Math.tan(radians);

  // Replace last number with tan(value)
  display.value = value.slice(0, -match[0].length) + result;
}
let memory = 0; // Store memory value

// Clear memory
function memoryClear() {
  memory = 0;
}

// Recall memory
function memoryRecall() {
  const display = document.getElementById("display");
  // If display ends with a number, append multiplication
  if (/[0-9)]$/.test(display.value)) {
    display.value += "*" + memory;
  } else {
    display.value += memory;
  }
}

// Add to memory (memory = memory + current number)
function memoryAdd() {
  const display = document.getElementById("display");
  let match = display.value.match(/(-?\d+\.?\d*)$/);
  if (!match) return;
  let number = parseFloat(match[0]);
  memory += number;
}

// Subtract from memory (memory = memory - current number)
function memorySubtract() {
  const display = document.getElementById("display");
  let match = display.value.match(/(-?\d+\.?\d*)$/);
  if (!match) return;
  let number = parseFloat(match[0]);
  memory -= number;
}

//Prevent Unmatched Parentheses

function addChar(char) {
  const display = document.getElementById("display");
  let openBrackets = (display.value.match(/\(/g) || []).length;
  let closeBrackets = (display.value.match(/\)/g) || []).length;

  if (char === "(") {
    if (/[0-9)]$/.test(display.value)) {
      display.value += "*(";
    } else {
      display.value += "(";
    }
  }

  if (char === ")" && openBrackets > closeBrackets) {
    display.value += ")";
  }
}
