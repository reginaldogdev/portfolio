function criarFuncionario(nome,sobrenome,a,p){

    return {
        nome,
        sobrenome,
        altura: a,
        peso: p,
        calculoImc(){
            const indice = this.peso/(this.altura ** 2).toFixed(1)
            if(indice < 18.5){
                console.log("Abaixo do peso")
            } else if(indice >= 18.5 && indice < 24.9){
                console.log("Peso normal")
            } else if(indice >= 25 && indice < 29.9){
                console.log("Acima do peso")
            } else if(indice >= 30 && indice < 34.9){
                console.log("Obesidade 1")
            } else if(indice >= 35 && indice < 39.9){
                console.log("Obesidade 2")
            } else if(indice >= 40){
                console.log("Obesidade 3")
            }
        }

    }
}

const p1 = criarFuncionario("Marcelo","Estruc",1.75,78);

p1.calculoImc();

const p2 = criarFuncionario("Reginaldo","Gomes",1.83,62);

p2.calculoImc();

const p3 = criarFuncionario("Nilza","Silva",1.64,57);

p3.calculoImc();
