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
        //if display is empty or not valid number - shows error
        if (display.value.trim() === "" || isNaN(display.value)){
            display.value = "Error";
            return;
        }

        //converts number to percentage
        display.value = parseFloat(display.value) / 100;
        return;
    }
    display.value += value;
}

/*function percent () {
    let display = document.getElementById("display");
    let value = display.value;
}

function percent(value) {
    return value / 100;
}

function percentage(base, percent) {
    return (base * percent) / 100;
}*/