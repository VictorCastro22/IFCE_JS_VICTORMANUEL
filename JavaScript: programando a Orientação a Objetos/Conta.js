export class Conta {
    constructor (saldoinicial, cliente, agencia){
        this._saldo = saldoinicial;
        this.cliente = cliente;
        this.agencia = agencia;
    }

    sacar(valor) {
        taxa = 1.1 * valor;
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

    transferir (valor, conta) {
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    
    }
}