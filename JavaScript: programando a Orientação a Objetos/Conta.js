import { Cliente } from "./Cliente.js";

export class Conta {
    constructor (saldoinicial, cliente, agencia){
        this._saldo = saldoinicial;
        this.cliente = cliente;
        this.agencia = agencia;
    }

    set cliente(novoValor) { //Atribuição
        if (novoValor instanceof Cliente) {
            this._cliente = novoValor;
        }
    }

    get cliente() { //Retorna
        return this._cliente;
    }

    get saldo() {
        return this._saldo;
    }

    sacar(valor) {
        let taxa = 1;
        const valorSacado = taxa * valor;
        if (this._saldo >= valorSacado) {
            this._saldo -= valorSacado;
            return valorSacado;

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