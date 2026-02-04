// Select the display
const display = document.getElementById('display');

// Select all buttons
const buttons = document.querySelectorAll('.button');

// Loop through each button and add click event
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;

        if (value === "C") {
            // Clear display
            display.textContent = "";
        } else if (value === "←") {
            // Backspace
            display.textContent = display.textContent.slice(0, -1);
        } else if (value === "=") {
            // Evaluate expression safely
            try {
                // eval() evaluates a string as a math expression
                display.textContent = eval(display.textContent);
            } catch {
                display.textContent = "Error";
            }
        } else {
            // Append number/operator to display
            display.textContent += value;
        }
    });
});
