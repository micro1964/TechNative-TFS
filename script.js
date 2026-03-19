document.addEventListener("DOMContentLoaded", () => {

  const btn = document.getElementById("btn");
  const calculateBtn = document.getElementById("calculateBtn");
  const display = document.getElementById("resultDisplay");
  const inputField = document.getElementById("expression");
  const resetBtn = document.getElementById("reset");

  // Load saved calculation ONCE
  let saved = localStorage.getItem("lastCalculation");

  if (saved) {
    display.textContent = "Last: " + saved;
    display.style.color = "blue";
  }

  // Show last calculation button
  btn.addEventListener("click", () => {
    if (saved) {
      display.textContent = "Last: " + saved;
      display.style.color = "blue";
    }
  });

  // Reset input
  resetBtn.addEventListener("click", () => {
    inputField.value = "";
  });

  // Calculator
  calculateBtn.addEventListener("click", () => {
   const input = inputField.value.replace(/\s+/g, "");

// Match: number operator number
const match = input.match(/^(-?\d+(\.\d+)?)([+\-*/])(-?\d+(\.\d+)?)$/);
//woodo magic what is your wisdom? Well it works so fuck it it stays even so i don't understand how it works
// /d means single digit 
//let's change the error too as it works a bit diffrently
//what what ai told me this string works with desimals 
//it doses
//i need to look into this more and break it down as it's just woodo magic
// k so -? means that it allows neg \d+ more than one digit (\.\d+)? allows to dicimal parts
if (!match) {
  display.textContent = "Error: Use format 10+5 or 10 + 5";
  display.style.color = "red";
  return;
}
// Open my website
siteBox.addEventListener("click", () => {
  window.open("https://tramkar.github.io", "_blank");
});  

const num1 = Number(match[1]);
const operator = match[3];
const num2 = Number(match[4]);

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

    display.textContent = `Result: ${result}`;
    display.style.color = "green";

    // Save + update saved variable
    saved = input + " = " + result;
    localStorage.setItem("lastCalculation", saved);
  });
//this works on hopes and prayers of me but as long as i don't touch it i will be fine ;)
});
