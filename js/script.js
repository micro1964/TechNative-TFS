const button = document.getElementById("btn");
const inputField = document.getElementById("userInput");
const resultDisplay = document.getElementById("result");

button.addEventListener("click", () => {
    let cleanInput = inputField.value.trim();
    let parts = cleanInput.split(" ").filter(Boolean);

    // Reset classes each click
    resultDisplay.className = "result";

    if (parts.length !== 3) {
        resultDisplay.textContent = "Error: Use format like 12 + 5";
        resultDisplay.classList.add("error");
        return;
    }

    let num1 = parseFloat(parts[0]);
    let operator = parts[1];
    let num2 = parseFloat(parts[2]);

    if (isNaN(num1) || isNaN(num2)) {
        resultDisplay.textContent = "Error: Numbers only";
        resultDisplay.classList.add("error");
        return;
    }

    let finalResult;

    switch (operator) {
        case "+":
            finalResult = add(num1, num2);
            break;
        case "-":
            finalResult = subtract(num1, num2);
            break;
        case "*":
            finalResult = multiply(num1, num2);
            break;
        case "/":
            if (num2 === 0) {
                resultDisplay.textContent = "Error: Division by zero";
                resultDisplay.classList.add("error");
                return;
            }
            finalResult = divide(num1, num2);
            break;
        default:
            resultDisplay.textContent = "Error: Invalid operator";
            resultDisplay.classList.add("error");
            return;
    }

    // ✅ Success case
    resultDisplay.textContent = `Result: ${finalResult}`;
    resultDisplay.classList.add("success");

    inputField.value = "";
    inputField.focus();
});

// Calculator functions
function add(a, b) { return a + b; }
function subtract(a, b) { return a - b; }
function multiply(a, b) { return a * b; }
function divide(a, b) { return a / b; }

// Enter key support
inputField.addEventListener("keyup", (e) => {
    if (e.key === "Enter") {
        button.click();
    }
});

const resetButton = document.getElementById("resetBtn");

resetButton.addEventListener("click", () => {
    inputField.value = "";
    resultDisplay.textContent = "Result:";
    resultDisplay.className = "result";
    inputField.focus();
});
