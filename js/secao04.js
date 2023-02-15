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