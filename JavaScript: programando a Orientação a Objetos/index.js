//CURSO FINALIZADO
/*Herança > Onde uma classe pode herdar comportamentos e características de outra classe.
a palavra "EXTENDS" e em seguida o nome da classe pai.
exemplo: class ContaPoupança extends Conta
isso faz com quê todos os recursos da classe Conta seja usado pela classe ContaPoupança.
Precedido pela palavra "SUPER" isso significa que ele está acessando o método definido na classe pai, 
ignorando o método sobrescrito na própria classe que retorna uma exceção.
- Static Podemos definir em uma classe métodos estáticos que podem ser executados sem que a mesma tenha sido instanciada. 
Geralmente este recurso é utilizado para criar funções de utilidades.*/

import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";
import { ContaPoupança } from "./ContaPoupança.js";
import { Conta } from "./Conta.js";

const cliente1 = new Cliente("Ricardo", 11122233309); //Construtor permite fazer atribuição assim.

const contaCorrenteRicardo = new ContaCorrente(0, cliente1, 1001);
contaCorrenteRicardo.depositar(500);
contaCorrenteRicardo.sacar(200);

const contaPoupança = new ContaPoupança(50, cliente1, 1001);

console.log(contaPoupança);

