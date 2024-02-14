
function calcularVitorias(vitorias,derrotas){
     let resultado = vitorias - derrotas;
     return resultado
}

let saldoVitorias = calcularVitorias(200,99);

function nivelHeroi(vitorias){
        let numeroDeVitorias = vitorias;
        let nivel = "";

    if(numeroDeVitorias <= 10){
        nivel = "Ferro";
    } else if (numeroDeVitorias <= 20){
        nivel = "Bronze";
    }else if (numeroDeVitorias <= 50){
        nivel = "Prata";
    }else if (numeroDeVitorias <= 80){
        nivel = "Ouro";
    }else if (numeroDeVitorias <= 90){
        nivel = "Diamante";
    }else if (numeroDeVitorias <= 100){
        nivel = "Lendário";
    } else {
        nivel = "Imortal";
    }

    return nivel;

}

let nivel = nivelHeroi(saldoVitorias);

console.log(`O herói tem saldo de ${saldoVitorias} vitórias e está no nível ${nivel}!`); 
