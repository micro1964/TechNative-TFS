const { useId } = require("react");

// Wait until the page is fully loaded
document.addEventListener("DOMContentLoaded", () => {

  // Button click message
  const btn = document.querySelector("#btn");
  const text = document.querySelector("#text");

  btn.addEventListener("click", () => {
    text.textContent = "You clicked the button!";
  });

  // Calculator logic
  document.getElementById('calculateBtn').addEventListener('click', function() {

    let input = document.getElementById('expression').value.trim();
    let display = document.getElementById('resultDisplay');

    // Split the expression
    let parts = input.split(" ");

    // Validate format
    if (parts.length !== 3) {
      display.textContent = "Error: Use format '10 + 5'";
      return;
    }

    
let num1 = Number(parts[0]);
    let operator = parts[1];
    let num2 = Number(parts[2]);

    // Validate numbers
    if (isNaN(num1) || isNaN(num2)) {
      display.textContent = "Error: Invalid Numbers";
      return;
    }

    // Functions
    const add = (a, b) => a + b;
    const subtract = (a, b) => a - b;
    const multiply = (a, b) => a * b;
    const divide = (a, b) => b !== 0 ? a / b : "Error: Div by 0";

    // Calculate
    let result;
    switch (operator) {
      case '+': result = add(num1, num2); break;
      case '-': result = subtract(num1, num2); break;
      case '*': result = multiply(num1, num2); break;
      case '/': result = divide(num1, num2); break;
      default: result = "Error: Invalid Operator";
    }

    // Show result
    display.textContent = "Result: " + result;
  });
  //user input read in index?
  //no looks like I need to ref index so i can get data from it or dose it do automaticaly?
  useId (userInput)

});
// https://stackoverflow.com/questions/17433557/how-to-save-user-input-into-a-variable-in-html-and-javascript
// link to look into 

//https://www.w3schools.com/jsref/prop_win_sessionstorage.asp
//talks about local storage 