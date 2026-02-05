# TechNative-TFS

<h1 Project Overview>

This project is a calculator web application developed by myself.
My goal was to start with a basic calculator and progressively improve it by adding advanced scientific features, improving usability, and making the interface more robust.
The project also helped me understand JavaScript logic, DOM manipulation, and how to debug and fix issues when adding new features.

<h2 HTML>

Used to structure the calculator layout
Buttons for numbers, operators, and scientific functions
Display area for showing calculations and results

<h2 CSS>

Used to style the calculator
Responsive layout so the calculator works on different devices
Color palette based on duck-egg blue, blue, and grey
Button sizing and spacing for better usability

<h2 JavaScript>

Core logic of the calculator
Handles button clicks and keyboard input
Performs mathematical calculations
Manages advanced features like trigonometry, memory, and percentages
Updates and controls the display

<h1 Calculator Features>

<h2 1 - Basic Calculator>

Addition (+)
Subtraction (−)
Multiplication (×)
Division (÷)
Clear (C / AC)
Backspace (⌫)
Parentheses ( )

<h2 2 - Advanced / Scientific Features>

π (Pi) button
sin, cos, tan (trigonometric functions, using degrees)
x² (square) and x³ (cube)
± (plus/minus) sign toggle
% (percentage) button

Memory functions:
MC (Memory Clear)
MR (Memory Recall)
M+ (Add to memory)
M− (Subtract from memory)

<h1 Development Process & Challenges>

<h2 1- Simple Calculator>

I initially built a basic calculator that could:

- Display numbers
- Perform simple arithmetic operations
- Calculate results correctly

<h2 2 - Adding Advanced Buttons>

Once the basic calculator was working, I added:

- π, sin, cos, tan
- Square and cube
- Memory buttons

During this step, the calculator broke multiple times due to:

- Incorrect display updates
- JavaScript errors stopping execution
- Conflicts between new functions and existing logic

I fixed these issues by:

- Debugging JavaScript errors
- Correcting DOM references
- Ensuring each function handled only the last number in the display

<h2 3 - Display Problem with Large Numbers>
When calculations became large, the single-line display could no longer show the full expression or result.

<h1 Solution>

Replaced the single-line <input> with a multi-line display (<textarea>)
Enabled text wrapping and scrolling
Automatically scrolled to the bottom so the latest result is always visible

This change initially caused the display to stop working, but after debugging:

I fixed incorrect display references
Ensured .value was used correctly
Restored full calculator functionality

<h1 Final Result>

<h2 The final calculator:>
Supports basic and scientific calculations
Can display very large numbers and long expressions
Works across different screen sizes
Demonstrates problem-solving, debugging, and progressive enhancement

<h1 What I Learned>

How to manipulate the DOM with JavaScript
How calculator logic works internally
How small changes can break functionality
How to debug step by step instead of rewriting everything

<h1 Future Improvements>

DEG / RAD mode toggle
Calculation history panel
Keyboard-only support
Improved error handling (e.g., invalid expressions)
Accessibility improvements
