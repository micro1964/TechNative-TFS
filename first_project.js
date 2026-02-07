// Select the display
const display = document.getElementById('display');

// Select all buttons
const buttons = document.querySelectorAll('.button');

let justCalculated = false; // 👈 NEW FLAG

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;

        if (value === "C") {
            display.textContent = "";
            justCalculated = false;

        } else if (value === "←") {
            display.textContent = display.textContent.slice(0, -1);

        } else if (value === "=") {
            try {
                display.textContent = eval(display.textContent);
                justCalculated = true; // 👈 mark calculation done
            } catch {
                display.textContent = "Error";
                justCalculated = false;
            }

        } else {
            // If a number is pressed after "=", start fresh
            if (justCalculated && !isNaN(value)) {
                display.textContent = value;
                justCalculated = false;
            } else {
                display.textContent += value;
                justCalculated = false;
            }
        }
    });
});
