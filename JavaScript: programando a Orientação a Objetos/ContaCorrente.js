import { Cliente } from "./Cliente.js";

export class ContaCorrente{

    agencia;
    /*#saldo = 0; //Botando o atributo privado. */
    _saldo = 0; //Mostrandoao usuário que o campo é privado.

    get saldo() {
        return this._saldo;
    }
    
    _cliente;

    set cliente(novoValor) { //Atribuição
        if (novoValor instanceof Cliente) {
            this._cliente = novoValor;
        }
    }

    get cliente() { //Retorna
        return this._cliente;
    }

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

    transferir (valor, conta) {
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    
    }
    
}