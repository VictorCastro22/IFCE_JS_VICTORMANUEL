/*AULA - Revisão do básico em Arrays
//                 0         1        2        3          4
// const nomes = ['Eduardo', 'Maria', 'Joana', 'Wallace', 'Rosana'];
// const novo = nomes.slice(1, -2);
// console.log(novo);

// const nomes = ['Eduardo', 'Maria', 'Joana'];
// const novo = [...nomes]; > Faço uma copia de "nomes" para "novo"
// .push > adiciona algo no fim do array
// .unshift > adiciona algo no inicio do array
// const nomes = ['Eduardo', 'Maria', 'Joana'];
// const removido = nomes.pop(); > .pop retira do array e passa para a nova variável.
// const nome = 'Luiz Otávio Miranda';
// const nomes = nome.split(' '); > Separando array

const nomes = [ 'Luiz', 'Otávio', 'Miranda' ];
const nome = nomes.join(' ');
console.log(nome);*/

/*AULA - Método Splice > Retorna um array
//               -5       -4       -3         -2        -1
//                0        1        2          3         4
const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia'];

// Unshift
nomes.splice(2, 0, 'Luiz', 'Otávio');
console.log(nomes);

//.splice > faz quase tudo com a manipulação, pois simula alguns aspectos.
// nomes.splice(índice atual, delete, elem1, elem2, elem3);
// pop
// const removidos = nomes.splice(-1, 1);

// shift
// const removidos = nomes.splice(0, 1);*/

/*AULA -  Concatenando arrays

const a1 = [1, 2, 3];
const a2 = [4, 5, 6];
const a3 = a1.concat(a2, [7, 8, 9], 'Luiz');
// Pega o a1, a2, adiciona os números e "Luiz" e manda para a3
// ... rest -> ... spread (Rest operation é bem importante)
// const a3 = [...a1, 'Luiz', ...a2, ...[7, 8, 9]];
console.log(a1, a2);
console.log(a3); */

/*AULA -   Filter - Filtrando o array

// Filter -> Sempre retornar um array, com a mesma quantidade de elementos
// ou menos.
//**Manda função de callback e vai reduzindo para uma function**
// Retorne os números maiores que 10
//               0  1   2   3  4 .....
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

function callbackFilter(valor){
    if (valor > 10) {
        return true;
    } else {
        return false;
    }
    //Posso simplificar a expressão acima apenas usando return?
    return valor > 10;    
}
//Posso diminuir botando direto dentro do filter e fazendo como arrow function

const numerosFiltrados = numeros.filter(valor => valor > 50);
console.log(numerosFiltrados);

/*Retorne as pessoas que tem o nome com 5 letras ou mais
// Retorne as pessoas com mais de 50 anos
// Retorne as pessoas cujo nome termina com a
const pessoas = [
  { nome: 'Luiz', idade: 62 },
  { nome: 'Maria', idade: 23 },
  { nome: 'Eduardo', idade: 55 },
  { nome: 'Letícia', idade: 19 },
  { nome: 'Rosana', idade: 32 },
  { nome: 'Wallace', idade: 47 },
];
const pessoasComNomeGrande = pessoas.filter(obj => obj.nome.length >= 5);
const pessoasComMaisDeCinquentaAnos = pessoas.filter(obj => obj.idade > 50);
const nomeTerminaComA = pessoas.filter(obj => {
  return obj.nome.toLowerCase().endsWith('a');
});
console.log(nomeTerminaComA);*/

