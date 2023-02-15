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

function criaMultiplicador (multiplicador) { //Criei uma função que retorna outra função
    return function(n) {
        return n * multiplicador;
    }
}

const duplica = criaMultiplicador(2); //O duplica recebe a função + o parâmetro do multiplicador 
const triplica = criaMultiplicador(3);
const quadriplica= criaMultiplicador(4);

console.log(duplica(2));//Aqui eu trago o duplica que recebeu a função anterior com seu parâmetro e adiciono o parâmetro n = 2.
console.log(triplica(3));
console.log(quadriplica(4));