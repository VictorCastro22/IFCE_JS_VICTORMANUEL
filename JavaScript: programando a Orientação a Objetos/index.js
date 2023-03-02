//CURSO FINALIZADO
import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";
import { ContaPoupança } from "./ContaPoupança.js";

const cliente1 = new Cliente("Ricardo", 11122233309); //Construtor permite fazer atribuição assim.

const contaCorrenteRicardo = new ContaCorrente(1001, cliente1);
contaCorrenteRicardo.depositar(500);
contaCorrenteRicardo.sacar(200);

const contaPoupança = new ContaPoupança(50, cliente1, 1001);

console.log(contaPoupança);






/*conta2.saldo = 30000; //O get não vai permitir atribuições do tipo.*/
//console.log(conta2.saldo);

/*console.log(contaCorrenteRicardo._saldo);
contaCorrenteRicardo.depositar(100);
contaCorrenteRicardo.depositar(200);
contaCorrenteRicardo.depositar(-1);
console.log(contaCorrenteRicardo._saldo);*/