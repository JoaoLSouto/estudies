// Criar uma variável para armazenar o nome e a quantidade de experiência (XP) de um usuário. 
// dpeois utilize uma estrutura de decisão para apresentar alguma das mensagens abaixo:  

let nickname = "Fulano"
let xp = 0
let ranking = ""

do {

    if(xp < 1000){
        ranking = "Ferro"
    }else if (xp >= 1000 && xp < 2000){
        ranking = "Bronze"
    }else if (xp >= 2000 && xp < 5000){
        ranking = "Prata"
    }else if (xp >= 5000 && xp < 4000){
        ranking = "Ouro"
    }else if (xp >= 6000 && xp < 7000){
        ranking = "Platina"
    }else if (xp >= 7000 && xp < 8000){
        ranking = "Ascendente"
    }else if (xp >= 8000 && xp < 9000){
        ranking = "Imortal"
    }else if (xp >= 9000 && xp <= 10000){
        ranking = "Radiante"
    }
	console.log("O Herói " + nickname + " está no nivel " + ranking)
	break;
} while (xp >= 0);