function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculateResult() {
    let display = document.getElementById('display').value;
    try {
        // Avalia a expressão matemática
        document.getElementById('display').value = eval(display);
    } catch (error) {
        document.getElementById('display').value = 'Erro';
    }
}
