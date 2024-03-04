var s = "JavaScript e Pyton";

var pos1 = s.indexOf("Pyton");

var novaString = s.substring(13,19);
console.log(novaString);

var frase = "Olá mundo"
if(frase.startsWith("Olá")){
    let sub = frase.substring(4);
    let novaString = sub.replace("mundo", "pessoal")
    let novaStringMaiuscula = novaString.toUpperCase();
    console.log(novaStringMaiuscula);
}