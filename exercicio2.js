

function contagem_regressiva() {
    var contagem = 10;

    let sequencia = setInterval(function contagemLancamento() {
        console.log(contagem)


        if (contagem == 5) {
            console.log("Ignicao");
        }

        if (contagem < 1) {
            console.log("Lancamento");
            clearInterval(sequencia);
        }

        contagem--;
    }, 1000);

}

