class Heroi {
    constructor(nome, idade, tipo){
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;

    }


    atacar() {
      let ataque;
      switch (this.tipo.toLowerCase()) {
        case "guerreiro":
          ataque = "espada";
          break;
        case "mago":
          ataque = "magia";
          break;
        case "monje":
          ataque = "artes marciais";
          break;
        case "ninja":
          ataque = "shuriken";
          break;
        default:
          ataque = "ataque normal";  
      }
        console.log(`O ${this.tipo} atacou usando ${ataque}`);
    
   }
}

const guerreiro = new Heroi("Ching", 200, "guerreiro");
const mago = new Heroi("Nakal", 200, "mago");
const monje = new Heroi("Mestre Whu", 1000, "monje");
const ninja = new Heroi("Nakami", 150, "ninja");


mago.atacar();
guerreiro.atacar();
monje.atacar();
ninja.atacar();


 