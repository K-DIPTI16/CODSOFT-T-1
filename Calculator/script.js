const screen = document.getElementById('calc-screen');
const buttons = document.querySelectorAll('.btn');

let currentInput = '';
let operator = '';
let previousInput = '';

buttons.forEach(button => {
  button.addEventListener('click', function () {
    const value = this.value;
    
    if (value === 'C') {
      clearScreen();
    } else if (value === '=') {
      calculate();
    } else if (['+', '-', '*', '/'].includes(value)) {
      operator = value;
      previousInput = currentInput;
      currentInput = '';
    } else {
      currentInput += value;
      screen.value = currentInput;
    }
  });
});

function clearScreen() {
  currentInput = '';
  previousInput = '';
  operator = '';
  screen.value = '';
}

function calculate() {
  if (previousInput !== '' && currentInput !== '') {
    const result = eval(`${previousInput} ${operator} ${currentInput}`);
    screen.value = result;
    currentInput = result;
    previousInput = '';
    operator = '';
  }
}
