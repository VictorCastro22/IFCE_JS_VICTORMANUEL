class Cliente {

    nome;
    cpf;
    
}

class ContaCorrente{

    agencia;
    /*#saldo = 0; //Botando o atributo privado. */
    _saldo = 0; //Mostrandoao usuário que o campo é privado.

    sacar(valor) {
        if (this._saldo >= valor) {
            this._saldo -= valor;
            return valor;

        }
        return
    }

    depositar(valor) {
        if(valor <= 0) {
            return;
        }
        this._saldo += valor;
    }
}

const cliente1 = new Cliente;
cliente1.nome = "Ricardo";
cliente1.cpf = 0123456701;


const contaCorrenteRicardo = new ContaCorrente();
contaCorrenteRicardo.agencia = 1001;


console.log(contaCorrenteRicardo._saldo);
contaCorrenteRicardo.depositar(100);
contaCorrenteRicardo.depositar(200);
contaCorrenteRicardo.depositar(-1);
console.log(contaCorrenteRicardo._saldo);