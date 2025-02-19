import leia from 'readline-sync';
export default function atividade05() {
  console.log('Atividade 05');

var jogador = 0
var gol = 0
var numPassCerto = 0
var passErrado = 0
var nota =0
var notaFinal=0
var melhorjogador
for (var i = 0; i < 2; i++) {
    jogador = leia.question("DIGITE O NOME DO JOGADOR: ")
    gol = leia.questionInt("DIGITE A QUANTIDADE DE GOL DO JOGADOR: ")
    numPassCerto = leia.questionInt("DIGITE QUANTIDADE DE PASSO CERTO: ")
    passErrado = leia.questionInt("DIGITE A QUANTIDADE DE PASSO ERRADOS: ")
}
for (var i = 0; i < jogador.length; i++) {
    nota = (gol * 50) + (numPassCerto * 10) -(passErrado * -5)
    if (!notaFinal || nota > notaFinal) {
        notaFinal = nota
        melhorjogador = jogador
    }
}
console.log("MELHOR JOGADOR É: " + melhorjogador + "COM " + notaFinal + " pontos")
}