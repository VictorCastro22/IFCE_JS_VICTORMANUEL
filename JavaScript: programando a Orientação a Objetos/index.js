class Cliente {

    nome;
    cpf;
    
}

class ContaCorrente{

    agencia;
    saldo;

    sacar(valor){
        if(this.saldo <= valor){
            this.saldo -= valor;
        }
    }

    depositar(valor){
        if(this.saldo > 0){
            this.saldo += valor;
        }
    }

}

const cliente1 = new Cliente;
cliente1.nome = "Ricardo";
cliente1.cpf = 0123456701;

const contaCorrenteRicardo = new ContaCorrente();
contaCorrenteRicardo.agencia = 1001;
contaCorrenteRicardo.saldo = 1;


console.log(contaCorrenteRicardo.saldo);
contaCorrenteRicardo.depositar(50);
console.log(contaCorrenteRicardo.saldo);