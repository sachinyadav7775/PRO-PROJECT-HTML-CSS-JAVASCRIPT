const display = document.getElementById('calculator-display');

// Append value when button clicked
function appendValue(value) {
    display.value += value;
}

// Clear display
function clearDisplay() {
    display.value = '';
}

// Delete last character (backspace)
function deleteLast() {
    display.value = display.value.slice(0, -1);
}

// Factorial function
function factorial(n) {
    if (n < 0) return NaN;
    if (n === 0 || n === 1) return 1;
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

// Calculate expression
function calculate() {
    try {
        let expression = display.value;

        // Supports multiple factorials in expression
        expression = expression.replace(/(\d+)!/g, function(match, number) {
            return factorial(parseInt(number));
        });

        // Evaluate final expression
        display.value = eval(expression);
    } catch (error) {
        display.value = "Error";
    }
}