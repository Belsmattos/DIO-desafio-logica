let nomeHeroi = "Bel"
let xp = 10001;
let nivel = "";

if(xp <= 1000){
    console.log(`${nomeHeroi}, você é nível Ferro!`);
    nivel = "Ferro";
} else if (xp <= 2000){
    console.log(`${nomeHeroi}, você é nível Bronze!`);
    nivel = "Bronze";
}else if (xp <= 5000){
    console.log(`${nomeHeroi}, você é nível Prata!`);
    nivel = "Prata";
}else if (xp <= 7000){
    console.log(`${nomeHeroi}, você é nível Ouro!`);
    nivel = "Ouro";
}else if (xp <= 8000){
    console.log(`${nomeHeroi}, você é nível Platina!`);
    nivel = "Platina";
}else if (xp <= 9000){
    console.log(`${nomeHeroi}, você é nível Ascendente!`);
    nivel = "Ascendente";
}else if (xp <= 10000){
    console.log(`${nomeHeroi}, você é nível Imortal!`);
    nivel = "Imortal";
} else {
    console.log(`${nomeHeroi}, você é nível Radiante!`);
    nivel = "Radiante";
}

console.log(`O herói de nome ${nomeHeroi} está no nível de ${nivel}!`);