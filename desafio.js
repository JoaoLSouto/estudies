// Criar uma variável para armazenar o nome e a quantidade de experiência (XP) de um usuário. 
// dpeois utilize uma estrutura de decisão para apresentar alguma das mensagens abaixo:  

let usuario = true
let nickname = "Fulano"
let xp = 10000
if(xp < 1000){
    console.log("o ranking do " + nickname + " é Ferro")
}else if (xp >= 1000 && xp < 2000){
    console.log("o ranking do " + nickname + " é Bronze")
}else if (xp >= 2000 && xp < 5000){
    console.log("o ranking do " + nickname + " é Prata")
}else if (xp >= 5000 && xp < 4000){
    console.log("o ranking do " + nickname + " é Ouro")
}else if (xp >= 6000 && xp < 7000){
    console.log("o ranking do " + nickname + " é Platina")
}else if (xp >= 7000 && xp < 8000){
    console.log("o ranking do " + nickname + " é Ascendente")
}else if (xp >= 8000 && xp < 9000){
    console.log("o ranking do " + nickname + " é Imortal")
}else if (xp >= 9000 && xp <= 10000){
    console.log("o ranking do " + nickname + " é Radiante")
}