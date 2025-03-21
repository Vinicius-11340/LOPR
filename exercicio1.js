function somar_numeros() {
    let somar_numeros = 0;
    let continuar = true;

    while (continuar) {
        let numero = parseInt(prompt("Digite um número (ou digite 0 para encerrar:)"));

        if (isNaN(numero)) {
            alert("Por Favor, digite um número válido!")
        } else {
            soma += numero;
        }

        if (numero == 0) {
            continuar = false;
        }
    }

    alert("A soma dos números é: " + soma);
}