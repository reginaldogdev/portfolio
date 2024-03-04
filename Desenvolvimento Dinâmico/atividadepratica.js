const prompt = require('prompt-sync')();

var bebida = prompt("Escolha sua bebida: café, leite ou chá\n");
var valor;

switch (bebida) {
  case 'café':
    valorCafe = 2.50;
    console.log("Você escolheu café. O valor a ser pago é R$ " + valorCafe);
    break;
  case 'leite':
    valorLeite = 3.00;
    console.log("Você escolheu leite. O valor a ser pago é R$ " + valorLeite);
    break;
  case 'chá':
    valorCha = 2.00;
    console.log("Você escolheu chá. O valor a ser pago é R$ " + valorCha);
    break;
  default:
    console.log("Escolha inválida. Por favor, selecione entre café, leite ou chá.");
}
