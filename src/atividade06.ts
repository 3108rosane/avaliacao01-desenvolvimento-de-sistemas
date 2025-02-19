import leia from 'readline-sync';
export default function atividade06() {
    console.log('Atividade 06');

    var valorProduto = leia.questionInt("DIGITE O VALOR DO PRODUTO ")
    var quantidade = leia.questionInt("digite a quantidade")
    var valorTotal = leia.questionInt("informe o valor total")
if (valorProduto ){
   console.log("O VALOR VAI CUSTAR  " + valorTotal )
}else{ var valorMedio = valorProduto + (valorProduto * quantidade )
    console.log(" O VALOR MEDIO" + valorTotal)

}else{var valorTotal = valorProduto + (valorProduto * quantidade)
    console.log(" O VALOR TOTAL " + valorTotal)
}
}