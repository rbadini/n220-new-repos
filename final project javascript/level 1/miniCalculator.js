// Function to perform the calculation based on user inputs
function calculate() {
    // Retrieve the numbers entered by the user
    const num1 = parseFloat(document.getElementById('firstNumber').value);
    const num2 = parseFloat(document.getElementById('secondNumber').value);

    // Retrieve the selected operation from the dropdown
    const operation = document.getElementById('operation').value;

    let result;

    // Perform the calculation based on the selected operation
    switch (operation) {
        case 'add':
            result = `${num1} + ${num2} = ${num1 + num2}`;
            break;
        case 'subtract':
            result = `${num1} - ${num2} = ${num1 - num2}`;
            break;
        case 'multiply':
            result = `${num1} * ${num2} = ${num1 * num2}`;
            break;
        case 'divide':
            // Check to prevent division by zero
            if(num2 === 0) {
                result = "Cannot divide by zero";
            } else {
                result = `${num1} / ${num2} = ${num1 / num2}`;
            }
            break;
        default:
            result = "Invalid operation";
    }

    // Display the result of the calculation
    document.getElementById('result').innerText = result;
}
