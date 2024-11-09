function calculate(operator) {
    const firstNum = document.getElementById('number1');
    const secondNum = document.getElementById('number2');
    const resultField = document.getElementById('result');
    const error = document.getElementById('error');

    const number1 = parseFloat(firstNum.value);
    const number2 = parseFloat(secondNum.value);     

    if (isNaN(number1) || isNaN(number2)) {
        error.textContent = 'Числа введено не правильно!';
        resultField.value = '';
        return;
    }

    let result;

    switch (operator) {
        case '+':
            result = number1 + number2;
            break;
        case '-':
            result = number1 - number2;
            break;
        case '*':
            result = number1 * number2;
            break;
        case '/':
            if (number2 === 0) {
                error.textContent = 'Помилка!';
                resultField.value = '';
                return;
            }
            result = number1 / number2;
            result = Math.round(result * 100) / 100;
            break;
        default:
            result = 'Error';
    }

    resultField.value = result;
}

document.getElementById('clear').addEventListener('click', () => {
    document.getElementById('number1').value = '';
    document.getElementById('number2').value = '';
    document.getElementById('result').value = '';
    document.getElementById('error').textContent = '';
});