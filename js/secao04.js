/*AULA - Retorno da função
function falaFrase (comeco) {
    function falaResto (resto) {
        return comeco + " " + resto;
    }
    return falaResto;
}

const olaMundo = falaFrase("Olá");
console.log(olaMundo("mundo!"))
////console.log(olaMundo) me retorna a função "falaResto" // console.log(olaMundo("mundo!")) me retorna "Olá mundo!", pois mandei o parâmetro.*/

/*function criaMultiplicador (multiplicador) { //Criei uma função que retorna outra função
    return function(n) {
        return n * multiplicador;
    }
}

const duplica = criaMultiplicador(2); //O duplica recebe a função + o parâmetro do multiplicador 
const triplica = criaMultiplicador(3);
const quadriplica= criaMultiplicador(4);

console.log(duplica(2));//Aqui eu trago o duplica que recebeu a função anterior com seu parâmetro e adiciono o parâmetro n = 2.
console.log(triplica(3));
console.log(quadriplica(4));*/

/*AULA - Escopo léxico > A função lembra onde ela foi declarada
const nome = "Luiz";

function falaNome() {
    console.log(nome);
}

function usaFalaNome() { //O resultado será "Luiz" ainda
    const nome = "Otávio";
    falaNome();
}
usaFalaNome();*/

//AULA -  Closures > Habilidade de acessar o escopo léxico

//AULA - Funções de callback > Ordenar a maneira que as funções serão executadas

/*AULA - Funções imediatas (IIFE)
Fazer com que as variáveis e funções venham a fugir do escopo global

(function(idade, peso, altura) {
    
    const sobrenome = "Miranda";
    function criaNome(nome) {
        return nome + " " + sobrenome;
    }

    function falaNome() {
        console.log(criaNome("Luiz"));
    }

    falaNome();
    console.log(idade, peso, altura);

})(30, 80, 1.80);*/

/*AULA - Funções fábrica (Factory Functions)//
Criar uma função que facilita quando eu executar ela, principalmente usando "this"
Cria objeto

function criaPessoa(nome, sobrenome) {
    return {
        nome,
        sobrenome,
        fala: function(assunto) {
            return `${this.nome} está ${assunto}.`;
        }
    };
}


const p1 = criaPessoa("Luiz", "Otávio");
const p2 = criaPessoa("Maria", "Joaquina");
console.log(p2.fala(`falando sobre JS`));


Getter > get imc() > faz com que minha função se torne atributo
Setter > set nomeCompleto() > Receber 
//this sempre se refere a quem chamou, quem chamou foi "p2"*/

//AULA - Funções construtoras (constructor functions)
//Retorna o objeto
//Construtora -> Pessoa (new)
//Inicia o nome da função construtora com letra Maiuscula
function Pessoa(nome, sobrenome) {
    // Atributos ou métodos privados
    // const ID = 123456;
    // const metodoInterno = function() {};
  
    // Atributos ou métodos públicos
    this.nome = nome;
    this.sobrenome = sobrenome;
  
    this.metodo = function() {
      console.log(this.nome + ': sou um método');
    };
  }
  //"new" cria um objeto vazio, faz o "this" apontar para o objeto
  const p1 = new Pessoa('Luiz', 'Otávio');//precisa inserir o "new"
  const p2 = new Pessoa('Maria', 'Oliveira');
  p1.metodo();
  p2.metodo();