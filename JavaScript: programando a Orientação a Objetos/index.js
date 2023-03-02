//CURSO FINALIZADO
/*Herança > Onde uma classe pode herdar comportamentos e características de outra classe.
a palavra "EXTENDS" e em seguida o nome da classe pai.
exemplo: class ContaPoupança extends Conta
isso faz com quê todos os recursos da classe Conta seja usado pela classe ContaPoupança.
Precedido pela palavra "SUPER" isso significa que ele está acessando o método definido na classe pai, 
ignorando o método sobrescrito na própria classe que retorna uma exceção.
- Static Podemos definir em uma classe métodos estáticos que podem ser executados sem que a mesma tenha sido instanciada. 
Geralmente este recurso é utilizado para criar funções de utilidades.*/


/*import { ContaCorrente } from "./Conta/ContaCorrente.js";
import { ContaPoupança } from "./Conta/ContaPoupança.js";
import { Conta } from "./Conta/Conta.js";*/


import {Cliente} from "./Cliente.js";
import {Gerente} from "./Funcionario/Gerente.js"
import {Diretor} from "./Funcionario/Diretor.js"
import {SistemaAutenticacao} from "./SistemaAutenticacao.js"

const diretor =  new Diretor("Rodrigo", 10000, 12345678900);
diretor.cadastrarSenha("123456")
const gerente =  new Gerente("Ricardo",  5000, 12378945601);
gerente.cadastrarSenha("123");

const cliente = new Cliente("Lais", 78945612379, "456");
const gerenteEstaLogado = SistemaAutenticacao.login(gerente, "123");
const diretorEstaLogado = SistemaAutenticacao.login(diretor, "123456");


const clienteEstaLogado = SistemaAutenticacao.login(cliente, "456");

console.log(gerenteEstaLogado, diretorEstaLogado, clienteEstaLogado);


/*const cliente1 = new Cliente("Ricardo", 11122233309); //Construtor permite fazer atribuição assim.

const contaCorrenteRicardo = new ContaCorrente(cliente1, 1001);
const contaPoupança = new ContaPoupança(50, cliente1, 1001);
const conta = new Conta(0, cliente1, 1001);

console.log(conta);*/