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
  let display = document.getElementById("display");
  let expression = display.value;

  // Handle percentage operations: base op num%
  expression = expression.replace(
    /(\d+(?:\.\d+)?)([+\-*/])(\d+(?:\.\d+)?)%/g,
    (match, base, op, num) => {
      base = parseFloat(base);
      num = parseFloat(num);
      if (op === "+" || op === "-") {
        return `(${base} ${op} (${base} * ${num} / 100))`;
      } else if (op === "*") {
        return `(${base} * (${num} / 100))`;
      } else if (op === "/") {
        return `(${base} / (${num} / 100))`;
      }
    },
  );

  // Handle remaining % as /100
  expression = expression.replace(/%/g, "/100");

  try {
    display.value = eval(expression);
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

  let value = display.value;

  // Check if ends with (-number)
  let negativeMatch = value.match(/(\(-(\d+(?:\.\d+)?)\))$/);
  if (negativeMatch) {
    // Remove the (- and )
    value = value.slice(0, -negativeMatch[0].length) + negativeMatch[2];
  } else {
    // Find the last number and wrap with (- )
    let numberMatch = value.match(/(\d+(?:\.\d+)?)$/);
    if (numberMatch) {
      value =
        value.slice(0, -numberMatch[0].length) + "(-" + numberMatch[0] + ")";
    }
  }

  display.value = value;
}

// percent function that calculates percentage based on the last number and operator

function percent() {
  appendToDisplay("%");
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
