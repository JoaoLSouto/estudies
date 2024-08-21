class Heroi {
    constructor(nome,idade, tipo){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }
        tipoAtk() {
            let ataque;
            switch (this.tipo) {
                case 'mago':
                    ataque = 'magia';
                    break;
                case 'guerreiro':
                    ataque = 'espada';
                    break;
                case 'monge':
                    ataque = 'artes marciais';
                    break;
                case 'ninja':
                    ataque = 'shuriken';
                    break;
                default:
                    ataque = 'realizou um ataque';      
            }
            console.log(`O ${this.tipo} atacou usando ${ataque}`);
        }                    
    }

let novoHeroi = new Heroi("Fulano", 20, "mago")

novoHeroi.tipoAtk();