import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

const cliente1 = new Cliente("Ricardo", 11122233309); //Construtor permite fazer atribuição assim.
const cliente2 = new Cliente("Alice", 33322211109);


const contaCorrenteRicardo = new ContaCorrente(1001, cliente1);
contaCorrenteRicardo.depositar(500);
const conta2 = new ContaCorrente(102, cliente2);


let valor = 200;
contaCorrenteRicardo.transferir(valor, conta2)


/*conta2.saldo = 30000; //O get não vai permitir atribuições do tipo.*/
//console.log(conta2.saldo);

/*console.log(contaCorrenteRicardo._saldo);
contaCorrenteRicardo.depositar(100);
contaCorrenteRicardo.depositar(200);
contaCorrenteRicardo.depositar(-1);
console.log(contaCorrenteRicardo._saldo);*/