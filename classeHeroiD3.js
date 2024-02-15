class classeHeroi{
    constructor(nome,idade,tipo){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }

    atacar(){
        let ataque =""
        if (this.tipo === "Mago"){
            ataque = "Magia";
        } else if (this.tipo === "Guerreiro"){
            ataque = "Espada";
        }else if (this.tipo === "Monge"){
            ataque = "Artes marciais";
        } else {
            ataque = "Shuriken";
        }
        console.log(`O ${this.tipo} atacou usando ${ataque}`)
    }
}

//let heroi1 = new classeHeroi("Beto",20,"Mago");
//let heroi2 = new classeHeroi("Caio",24,"Guerreiro");
//let heroi3 = new classeHeroi("Bel",28,"Monge");
let heroi4 = new classeHeroi("Ana",18,"Ninja");

//heroi1.atacar()
//heroi2.atacar()
//heroi3.atacar()
heroi4.atacar()