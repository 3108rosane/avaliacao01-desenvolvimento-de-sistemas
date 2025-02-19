
import leia from 'readline-sync';
export default function atividade04() {  
  console.log('Atividade 04');
  var numero = 0 

  for (var i = 0; i < 100; i++) {
    numero = leia.questionInt("digite um numero");
}
console.log("o numero e correto")
}