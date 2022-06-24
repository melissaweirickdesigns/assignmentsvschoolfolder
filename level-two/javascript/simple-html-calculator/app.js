let calculator = document.getElementById('resultsInput');
let buttons = Array.from(document.getElementsByClassName('buttons'));
buttons.map(button => {
    button.addEventListener('click', (e) => {
        switch(e.target.value) {
            case 'CE':
                calculator.value = '';
                break;
            case 'C':
                calculator.value = calculator.value.slice(0, -1);
                break;
            case "ENTER":
                calculator.value = eval(calculator.value);
                break;
            default:
                calculator.value += e.target.value;
        };
    });
});