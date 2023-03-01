import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

const cliente1 = new Cliente;
cliente1.nome = "Ricardo";
cliente1.cpf = 123123;


const contaCorrenteRicardo = new ContaCorrente();
contaCorrenteRicardo.agencia = 1001;


console.log(contaCorrenteRicardo._saldo);
contaCorrenteRicardo.depositar(100);
contaCorrenteRicardo.depositar(200);
contaCorrenteRicardo.depositar(-1);
console.log(contaCorrenteRicardo._saldo);