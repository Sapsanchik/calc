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
