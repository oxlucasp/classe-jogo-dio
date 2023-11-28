//Declarando classe
class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        const ataques = {
            mago: 'magia',
            guerreiro: 'espada',
            monge: 'artes marciais',
            ninja: 'shuriken'
        };

        const ataque = ataques[this.tipo];

        console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
}

// saída
const heroi1 = new Heroi('Gardeny', 18, 'mago');
heroi1.atacar(); 

const heroi2 = new Heroi('Magrette', 21, 'guerreiro');
heroi2.atacar(); 