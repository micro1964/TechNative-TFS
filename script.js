const button=document.getElementById("calcBtn");
const inputField=document.getElementById("userInput");
const resultDisplay=document.getElementById("result");

button.addEventListener("click", () => {
    let rawInput=inputField.value;
    let cleanInput=rawInput.trim();

    let parts=cleanInput.split("");

    if (parts.length !== 3) {
    resultDisplay.textContent="Error";
    return;
    }

    let num1Str=parts[0];
    let operator=parts[1];
    let num2Str=parts[2];

    let num1=Number(num1Str);
    let num2=Number(num2Str);

    if (isNaN(num1) || isNaN(num2)) {
    resultDisplay.textContent="Error";
    return;
}

let finalResult;

switch (operator) {
    case "+":
        finalResult=add(num1, num2);
        break;
    case "-":
        finalResult=subtract(num1, num2);
        break;
    case "*":
        finalResult=multiply(num1, num2);
        break;
    case "/":
        if (num2 ===0){
            resultDisplay.textContent="Error";
            return;
        }
        finalResult=divide(num1, num2);
        default:
            resultDisplay.textContent -"Error";
}

resultDisplay.textContent="Result:" +finalResult;
});

function add(a, b){
    return a+b;
}
function subtract(a, b){
    return a-b
}
function multiply(a, b){
    return a*b;
}
function divide(a,b){
    return a/b;
}