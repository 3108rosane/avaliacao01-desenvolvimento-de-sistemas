import leia from 'readline-sync';
export default function atividade03() {
  console.log('Atividade 03');
  var papel = 0
  var tesoura = 0
  var pedra = 0
  var opcao = 0

  for (let i = 0; i < pedra.length; i++) {
    var opcao = leia.question ("digite sua escolha")

   if (pedra * tesoura ) {
    console.log("pedra vence tesoura") ;
   }else(tesoura * papel){
    console.log("tessoura vence papel");
   }else(papel * pedra){
    console.log("papel vence pedra")
   }
    
  }
}