document.getElementById('igual').addEventListener('click', function () {
    const valor1 = parseFloat(document.getElementById('campo1').value);
    const valor2 = parseFloat(document.getElementById('campo2').value);
    const operacao = document.getElementById('operacao').value;
    let resultado;

    if (isNaN(valor1) || isNaN(valor2)) {
        resultado = 'Digite números válidos';
    } else {
        switch (operacao) {
            case 'somar':
                resultado = valor1 + valor2;
                break;
            case 'subtrair':
                resultado = valor1 - valor2;
                break;
            case 'multiplicar':
                resultado = valor1 * valor2;
                break;
            case 'dividir':
                if (valor2 === 0) {
                    resultado = 'Não é possível dividir por zero';
                } else {
                    resultado = valor1 / valor2;
                }
                break;
            default:
                resultado = 'Operação inválida';
        }
    }

    document.getElementById('resposta').textContent = resultado;
});