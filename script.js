let history = '';
let currentInput = '0';

function updateDisplay() {
    document.getElementById('history').innerText = history;
    document.getElementById('result').innerText = currentInput;
}

function clearDisplay() {
    history = '';
    currentInput = '0';
    updateDisplay();
}

function appendNumber(number) {
    if (currentInput === '0') {
        currentInput = number.toString();
    } else {
        currentInput += number.toString();
    }
    updateDisplay();
}

function appendOperator(operator) {
    if (operator === '+/-') {
        currentInput = (parseFloat(currentInput) * -1).toString();
    } else {
        history += currentInput + ' ' + operator + ' ';
        currentInput = '0';
    }
    updateDisplay();
}

function calculate() {
    history += currentInput;
    try {
        currentInput = eval(history.replace('×', '*').replace('÷', '/')).toString();
    } catch {
        currentInput = 'Error';
    }
    history = '';
    updateDisplay();
}

