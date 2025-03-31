function ordem() {
    let numero = [];
    let num = 0
    let trocou = false;

    while (num <= 3) {
        numero[num] = parseInt(prompt("Digite um número:"));

        if (isNaN(numero[num])) {
            alert("Insira um valor válido!!")
        } else {
            num++
        }
    }

    numero.sort(function(a, b) {return b-a})

    let tamanho = numero.length;

    do {
        trocou = false;
        for(let i = 0; i < tamanho; i++) {
            if (numero[i] < numero [i+1]){
                aux1 = numero[i];
                aux2 = numero [i+1];
                numero[i] = aux2;
                numero[i+1] = aux1;
                trocou = true;
            }
        }
        tamanho--; //tamanho = tamanho - 1
    } while(trocou) 

    alert(numero);
}