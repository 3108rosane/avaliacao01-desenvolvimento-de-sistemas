import leia from 'readline-sync';
export default function atividade01() {
  console.log('Atividade 01');
  var nota = 0
  
  for (var i = 0; i < 100; i++) {
    nota = leia.questionInt("digite uma nota")
    if ( 90 || 100) {
      console.log("A"); 
    }if(80 || 89){
      console.log("B");
    }if (70 ||79) {
      console.log("C");
    }if (60 || 69){
      console.log("D");
    }if (nota < 60){
      console.log("F")
    }else{(nota < 0 || nota > 100)
      console.log("nota inserida não confere");
    }
  }




//Nota entre 90 e 100: "A"
//Nota entre 80 e 89: "B"
//Nota entre 70 e 79: "C"
//Nota entre 60 e 69: "D"
//Nota abaixo de 60: "F"
//Se a nota inserida for inválida (menor que 0 ou maior que 100), o programa deve imprimir uma mensagem de erro.