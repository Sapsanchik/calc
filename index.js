const resultElement = document.getElementById('result');
const number1 = document.getElementById('number1');
const number2 = document.getElementById('number2');
const submitBtn = document.getElementById('submit');
const plus = document.getElementById('plus');
const minus = document.getElementById('minus');
const multiply = document.getElementById('multiply');
const division = document.getElementById('division');

let action = null;

plus.onclick = function () {
    action = '+';
};

minus.onclick = function () {
    action = '-';
};

multiply.onclick = function () {
    action = '*';
};

division.onclick = function () {
    action = '/';
};

function calculate(a, b) {
    let result = null;

    switch (action) {
        case '+':
            result = a + b;
            break;
        case '-':
            result = a - b;
            break;
        case '*':
            result = a * b;
            break;
        case '/':
            if (b !== 0) {
                result = a / b;
            } else {
                return 'Error: division by zero';
            }
            break;
        default:
            return 'Invalid operation';
    }
    return result;
}

submitBtn.onclick = function () {
    const a = Number(number1.value);
    const b = Number(number2.value);
    const result = calculate(a, b);
    resultElement.textContent = result;
};
