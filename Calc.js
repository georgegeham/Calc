let buttonValue;
let calcHtml = '';
let op = [' + ', ' - ', ' * ', ' / '];
function getValue() {
    document.querySelectorAll('button').forEach(one => {
        one.addEventListener('click', () => {
            if (one.innerHTML === ' = ') {
                console.log("Compute");
                calcHtml = evaluate(calcHtml);
                display();
            }
            else if (one.innerHTML === 'clear') {
                clear();
            }
            else {
                buttonValue = one.innerHTML;
                display();
            }
        })
    })
}
function display() {
    calcHtml += buttonValue;
    buttonValue = '';
    document.querySelector('.display').innerHTML = calcHtml;
}
function clear() {
    calcHtml = '';
    display();
}
function evaluate(expression) {
    return new Function(`return ${expression}`)();
}
getValue();
