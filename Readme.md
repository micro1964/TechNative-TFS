My first project
just added html
<title>Calculator<title>  
<h2>Simple Calculator</h2>
</head>
<body>
    <section>
        <div class="container">
            <!-- Display -->
            <div id="display"></div>

            <!-- Buttons -->
            <div class="buttons">
                <div class="button">C</div>
                <div class="button">/</div>
                <div class="button">*</div>
                <div class="button">&larr;</div>

                <div class="button">7</div>
                <div class="button">8</div>
                <div class="button">9</div>
                <div class="button">-</div>

                <div class="button">4</div>
                <div class="button">5</div>
                <div class="button">6</div>
                <div class="button">+</div>

                <div class="button">1</div>
                <div class="button">2</div>
                <div class="button">3</div>
                <div class="button">.</div>

                <div class="button">(</div>
                <div class="button">0</div>
                <div class="button">)</div>
                <div id="equal" class="button">=</div>
            </div>
        </div>
    </section>

    <script src="first_project.js"></script>
</body>
</html>


Added css
/* Reset */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}


/* Page background */
body {
    min-height: 100vh;
    background: linear-gradient(135deg, #1e1e2f, #2b2b45);
    display: flex;
    align-items: center;
    justify-content: center;
}

/* Calculator container */
.container {
    width: 320px;
    background: #1f1f2e;
    border-radius: 16px;
    padding: 20px;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
}

/* Display */
#display {
    height: 70px;
    width: 100%;
    background: #111827;
    color: #ffffff;
    font-size: 2rem;
    text-align: right;
    padding: 15px;
    border-radius: 10px;
    margin-bottom: 15px;
    overflow-x: auto;
}

/* Buttons grid */
.buttons {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 12px;
}

/* Base button style */
.button {
    height: 55px;
    background: #2d2d44;
    color: #ffffff;
    font-size: 1.2rem;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    user-select: none;
    transition: background 0.2s ease, transform 0.1s ease;
}

/* Hover & active effects */
.button:hover {
    background: #3a3a5c;
}

.button:active {
    transform: scale(0.95);
}

/* Operator buttons */
.button:nth-child(2),
.button:nth-child(3),
.button:nth-child(4),
.button:nth-child(8),
.button:nth-child(12),
.button:nth-child(16) {
    background: #374151;
}

.button:nth-child(2):hover,
.button:nth-child(3):hover,
.button:nth-child(4):hover,
.button:nth-child(8):hover,
.button:nth-child(12):hover,
.button:nth-child(16):hover {
    background: #4b5563;
}

/* Clear button */
.button:first-child {
    background: #7c2d12;
}

.button:first-child:hover {
    background: #9a3412;
}

/* Equal button */
#equal {
    background: #2563eb;
    color: #ffffff;
    font-weight: bold;
}

#equal:hover {
    background: #1d4ed8;
}

Added javascript

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
