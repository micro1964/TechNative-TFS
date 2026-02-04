document.addEventListener("DOMContentLoaded", () => {


  // Button click message
  const btn = document.getElementById("btn");
  const text = document.getElementById("text");
// I dose work but puts it over the result and only shows one of the answer
  btn.addEventListener("click", () => {
      if (saved) {
    display.textContent = "Last: " + saved;
    display.style.color = "blue";
  }
  });

  // Calculator
  const calculateBtn = document.getElementById("calculateBtn");
  const display = document.getElementById("resultDisplay");
  const inputField = document.getElementById("expression");

  calculateBtn.addEventListener("click", () => {
    const input = inputField.value.trim();
    const parts = input.split(" ");

    // Validate format
    if (parts.length !== 3) {
      display.textContent = "Error: Use format '10 + 5'";
      display.style.color = "red";
      return;
    }

    const num1 = Number(parts[0]);
    const operator = parts[1];
    const num2 = Number(parts[2]);

    if (isNaN(num1) || isNaN(num2)) {
      display.textContent = "Error: Invalid numbers";
      display.style.color = "red";
      return;
    }

    let result;

    switch (operator) {
      case "+":
        result = num1 + num2;
        break;
      case "-":
        result = num1 - num2;
        break;
      case "*":
        result = num1 * num2;
        break;
      case "/":
        if (num2 === 0) {
          display.textContent = "Error: Division by zero";
          display.style.color = "red";
          return;
        }
        result = num1 / num2;
        break;
      default:
        display.textContent = "Error: Invalid operator";
        display.style.color = "red";
        return;
    }

    // Show result
    display.textContent = `Result: ${result}`;
    display.style.color = "green";

    // Save result to localStorage
    localStorage.setItem("lastCalculation", input + " = " + result);
  });

  // Load saved calculation
  const saved = localStorage.getItem("lastCalculation");
  if (saved) {
    display.textContent = "Last: " + saved;
    display.style.color = "blue";
  }

});
 