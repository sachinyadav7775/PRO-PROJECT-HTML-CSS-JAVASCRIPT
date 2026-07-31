const display = document.getElementById("calculator-display");

// Add value to display
function appendValue(value) {
    if (display.value === "Error") {
        display.value = "";
    }

    display.value += value;
}

// Clear all
function clearDisplay() {
    display.value = "";
}


// Delete last character
function deleteLast() {
    display.value = display.value.slice(0, -1);
}

// Factorial function
function factorial(number) {

    if (number < 0 || !Number.isInteger(number)) {
        return "Error";
    }

    if (number === 0 || number === 1) {
        return 1;
    }

    let result = 1;

    for (let i = 2; i <= number; i++) {
        result *= i;
    }

    return result;
}


// Calculate result
function calculate() {

    try {

        let expression = display.value;

        if (expression === "") {
            return;
        }

        // Convert percentage
        expression = expression.replace(/%/g, "/100");

        // Calculate factorial
        expression = expression.replace(/(\d+)!/g, function(match, number) {
            return factorial(Number(number));
        });


        let result = eval(expression);

        if (result === Infinity || isNaN(result)) {
            display.value = "Error";
        }
        else {
            display.value = result;
        }

    } catch (error) {

        display.value = "Error";

    }
}

// Keyboard support
document.addEventListener("keydown", function(event) {

    let key = event.key;

    if (
        (key >= "0" && key <= "9") ||
        key === "+" ||
        key === "-" ||
        key === "*" ||
        key === "/" ||
        key === "." ||
        key === "%"
    ) {
        appendValue(key);
    }

    else if (key === "Enter") {
        calculate();
    }

    else if (key === "Backspace") {
        deleteLast();
    }

    else if (key === "Escape") {
        clearDisplay();
    }

});