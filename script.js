const expressionInput = document.getElementById("expression");
const calculateBtn = document.getElementById("calculateBtn");
const resetBtn = document.getElementById("resetBtn");
const resultDisplay = document.getElementById("resultDisplay");

function calculate() {
  const expr = expressionInput.value.trim();

  if (!expr) {
    resultDisplay.textContent = "Please type an expression.";
    return;
  }

  const allowed = /^[0-9+\-*/().\s]+$/;
  if (!allowed.test(expr)) {
    resultDisplay.textContent = "Invalid characters. Use numbers and + - * / ( ) only.";
    return;
  }

  try {
    const result = Function(`"use strict"; return (${expr})`)();
    if (!Number.isFinite(result)) throw new Error();
    resultDisplay.textContent = `Result: ${result}`;
  } catch {
    resultDisplay.textContent = "Error: Invalid expression.";
  }
}

// Calculate button
calculateBtn.addEventListener("click", calculate);

// Enter key support
expressionInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    calculate();
  }
});

// Reset button
resetBtn.addEventListener("click", () => {
  expressionInput.value = "";
  resultDisplay.textContent = "";
  expressionInput.focus();
});