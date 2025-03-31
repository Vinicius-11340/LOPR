function saldo_financeiro(){

    let mes = 1;
    let soma = 0;

    while (mes<=12){
        let ganho_bruto = parseInt(prompt("Digite o ganho do mês: " +  mes));

    if (isNaN(ganho_bruto)) {
        alert("Insira um valor válido!!")
    } else {
        soma += ganho_bruto;
        mes += 1;
    }

    }

    let resultado = soma;
    mes = 1;
    soma = 0;
    while (mes <= 12) {
        let gasto = parseInt(prompt("Digite o gasto do mês: " + mes));
        if (isNaN(gasto)) {
            alert("Digitar um número válido");
        } else {
            soma += gasto;
            mes += 1;
        }
        
    }

   if (resultado - soma < 0){
    alert("Ganhos: " + resultado + "\n" + "Gastos: " + soma + "\n" + "Valor final: " + (resultado - soma) + "\n" + "Prejuízo");
   } else if (resultado - soma == 0){
    alert("Ganhos: " + resultado + "\n" + "Gastos: " + soma + "\n" + "Valor final: " + (resultado - soma) + "\n" + "Sem lucro / Sem dívida");
   } else{ 
    alert("Ganhos: " + resultado + "\n" + "Gastos: " + soma + "\n" + "Valor final: " + (resultado - soma) + "\n" +  "Lucro");
   }
    

 
    
} 