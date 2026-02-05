const display = document.getElementById("display");

function clearDisplay() { 
    display.value = ""; 
}

function backspace() { 
    display.value = display.value.slice(0, -1); 
}

function calculate() { 
    try {
        if (display.value.trim() === "") return;
        display.value = eval(display.value); } 
        catch (error) { 
        display.value = "Error"; } 
}

function appendToDisplay(value) {
    if (value === "%") {
        if (display.value.trim() === ""){
            display.value = "Error";
            return;
        }
        display.value = parseFloat(display.value) / 100;
        return;
    }
    display.value +=value;
}