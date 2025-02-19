import leia from 'readline-sync';
export default function atividade02() {
  console.log('Atividade 02');

  let vetorPessoa = [];

    let idade = pessoa = {idade: Number.MAX_VALUE, nome: ""};
    
    for(let i = 0; i < 60; i++){
        let idade = leia.questionInt("informe a idade:");
       
        vetorPessoa.push(pessoa);
    }
    for(let i = 0 ; i < 12 (vetorPessoa.length; i++)){
        if(vetorPessoa[i].idade < 12){
            console.log("criança");
        }else{(vetorPessoa[i].idade <= 17){
          console.log("Adolecente");
        }else{(vetorPessoa[i].idade <= 59){
          console.log("Adulto");
        }else{(vetorPessoa[i].idade ===60 ){
          console.log("Idoso")
        }
        }
    }
  }
}
//Menor de 12 anos: "Criança"
//De 12 a 17 anos: "Adolescente"
//De 18 a 59 anos: "Adulto"
//60 anos ou mais: "Idoso"