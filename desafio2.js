let nickname = "Fulano";
let ranking = "";
let somatorio = saldo(10, 7); 
function saldo(wins, loses) {
    return wins + loses; 
}

if (somatorio < 10) {
    ranking = "Ferro";
} else if (somatorio >= 11 && somatorio < 20) {
    ranking = "Bronze";
} else if (somatorio >= 21 && somatorio < 50) {
    ranking = "Prata";
} else if (somatorio >= 51 && somatorio < 80) {
    ranking = "Ouro";
} else if (somatorio >= 81 && somatorio < 90) {
    ranking = "Diamante";
} else if (somatorio >= 91 && somatorio < 100) {
    ranking = "Lendário";
} else if (somatorio >= 101 && somatorio <= 10000) {
    ranking = "Imortal";
}

console.log("O Herói tem um saldo de " + somatorio + " e está no nível " + ranking);
