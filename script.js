function calculate() {
    // Fetching the values from the form
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    let operator = document.getElementById('operator').value;

    let result = 0;
    let errorMessage = "";

    // Checking if the inputs are valid numbers
    if (isNaN(num1) || isNaN(num2)) {
        errorMessage = "Please enter valid numbers.";
    } else {
        // Perform the operation based on the selected operator
        switch (operator) {
            case "+":
                result = add(num1, num2);
                break;
            case "-":
                result = subtract(num1, num2);
                break;
            case "*":
                result = multiply(num1, num2);
                break;
            case "/":
                result = divide(num1, num2);
                break;
            default:
                errorMessage = "Invalid operator.";
                break;
        }
    }

    // Display the result or error message
    if (errorMessage) {
        document.getElementById('result').textContent = errorMessage;
    } else {
        document.getElementById('result').textContent = "Result: " + result.toFixed(2);
    }
}

function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    if (num2 === 0) {
        return "Cannot divide by zero.";
    } else {
        return num1 / num2;
    }
}