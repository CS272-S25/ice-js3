console.log("Hello world!");

/**
 * Grabs the numbers and operations from document, performs the calculation,
 * and alerts the user of the result. If any of the inputs are empty, it will
 * alert the user to complete the form instead.
 */
function calculate() {
    let n1 = getNumberInput("num1");
    let n2 = getNumberInput("num2");
    let op = document.getElementById("op-select").value;

    if (n1 === null || n2 === null) {
        alert("Missing number(s)!")
    } else {
        const res = getResult(n1, n2, op);
        alert(`The result is ${res}`);
    }
}

/**
 * Gets the number of an input if it exists, otherwise returns null
 * @param {string} name the ID of the HTML element
 * @returns {number || null} the input as a number, or null if empty
 */
function getNumberInput(name) {
    const val = document.getElementById(name).value;
    if (val === '') {
        return null;
    } else {
        return parseFloat(val);
    }
}

/**
 * Returns the result of x and y based on the operation
 * @param {number} x The first operand
 * @param {number} y The second operand
 * @param {string} operation The operator
 * @returns {number} the result
 */
function getResult(x, y, operation) {
    let result;
    if (operation === "Add") {
        result = x + y;
    } else if (operation === "Subtract") {
        result = x - y;
    } else if (operation === "Multiply") {
        result = x * y;
    } else if (operation === "Divide") {
        result = x / y;
    } else {
        result = 0; // This should never happen!
    }
    return result;
}
