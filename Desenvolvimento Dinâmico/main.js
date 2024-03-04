var valores = [8,1,7,2,9];

console.log(valores[3]);

console.log("Array invertido: " + valores.reverse());

for (var pos = 0 ; pos < valores.length; pos++){
    console.log("Posição: " + pos + " Valor: " + valores[pos]);
}

var carros = [];
carros[0] = "Volvo";
carros[1] = "Jeep";


var motos = new Array("BMW", "Yamaha", "Honda");

// Calcular a média de todos os números de um array

var soma = 0;
for (var pos = 0 ; pos < valores.length; pos++){
    soma += valores[pos];

}

var media = soma/valores.length;

console.log(media);


var arr1 = [1,2,3,4,5,6];

console.log(arr1.join(' '));

var retirado = arr1.shift();

console.log(retirado);

console.log(arr1);

console.log("Posição do número 3: " + arr1.indexOf(3));

arr1.push(7);

console.log(arr1);

arr1.pop();

console.log(arr1);


var ar = [-5,10,15,20,-3,89];

var arr2 = [1,2,3,4,5,6,7];

arr2.splice(2,3);

console.log(arr2);


var nomes = ["Maria" , "Joao", "Lucas", "Pedro"];
var novos = nomes.splice(1,2,"Luiz", "Ronaldo");
console.log(nomes);

var pais = ["Brasil", "Argentina", "Colombia"];

pais.unshift("Uruguai");
console.log(pais);


var pessoa = ["Eduardo", "Joana", "Wallace", "Rosana"];
var gerente = ["Davi", "Manuela"];
var pessoas1 = pessoa.slice(1,3);

console.log(pessoa);
console.log(pessoas1);


var empresa = pessoa.concat(gerente);

console.log(empresa);

var ano = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

var trimestre1 = ano.slice(0,3);
var trimestre2 = ano.slice(3,6);
var trimestre3 = ano.slice(6,9);
var trimestre4 = ano.slice(9,12);


console.log("O primeiro trimestre do ano é composto por: " + trimestre1);
console.log("O segundo trimestre do ano é composto por: " + trimestre2);
console.log("O terceiro trimestre do ano é composto por: " + trimestre3);
console.log("O quarto trimestre do ano é composto por: " + trimestre4);