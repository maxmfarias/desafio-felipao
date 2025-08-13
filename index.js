// desafio classificador de nível de herói 

// variável para armazenar o nome e quantidade de xp do herói

let nomeHeroi = "Max"
let quantidadeDeExperiencia = "7000"
let nivel = ""
// 

if(quantidadeDeExperiencia < 1000){
    nivel = "Ferro"
}
else if(quantidadeDeExperiencia <= 2000){
    nivel = "Bronze"
}
else if(quantidadeDeExperiencia <= 5000){
    nivel = "Prata"
}
else if(quantidadeDeExperiencia <= 7000){
    nivel = "Ouro";
}
else if(quantidadeDeExperiencia <= 8000){
    nivel = "Platina";
}
else if(quantidadeDeExperiencia <= 9000){
    nivel = "Ascendente"
}
else if(quantidadeDeExperiencia <=10000){
    nivel = "Imortal";        
}
else if(quantidadeDeExperiencia >= 10001){
    nivel = "Radiante";
}

console.log(`O Herói de nome ${nomeHeroi} tá no nível de ${nivel}`);