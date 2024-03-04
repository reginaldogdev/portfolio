var pais = "Brasil";

if(pais != "Brasil"){
    console.log("Você é estrangeiro");
}else{
    console.log("Você é Brasileiro");
}

var idade = 22;

if(idade < 16){
    console.log("Não vota")
}else if (idade < 18 || idade > 65){
    console.log("Voto opcional")
}else{
    console.log("Voto obrigatório")
}

var diaSem = 4;

switch(diaSem){
    case 1:
        console.log("Domingo");
        break;
    case 2:
        console.log("Segunda");
        break;
    case 3:
        console.log("Terça");
        break;
    default:
        console.log("Esse dia da semana não existe!");
}

const numeros = [2, 4, 6, 8, 10];

let soma = 0;

for (let i = 0; i < numeros.length; i++) {

  if (numeros[i] % 2 === 0) {

    soma += numeros[i];

  }

}

console.log(soma);