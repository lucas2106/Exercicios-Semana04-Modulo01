console.log("script funcionando");

function nomeFuncao() {
    let numero1 = 10;
    let numero2 = 5;
    console.log(numero1 + numero2);
}

function soma(a, b) {
    return a + b;
}

function gerarResultado() {
    let numero1 = parseFloat(document.getElementById('inputNumero1').value);
    let numero2 = parseFloat(document.getElementById('inputNumero2').value);
    let resultado = soma(numero1, numero2);
    document.getElementById('txt-resultado').innerText = `Resultado da soma: ${resultado}`;
}
