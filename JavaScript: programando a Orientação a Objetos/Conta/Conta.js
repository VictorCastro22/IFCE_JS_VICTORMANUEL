import { Cliente } from "../Cliente.js";
//Clase abstrata > só funciona para ser herdada.
export class Conta {
    constructor (saldoinicial, cliente, agencia){
        if(this.constructor == Conta){ //Bloqueando para que a classe Conta não seja usada diretamente.
            throw new Error("Você não deveria instanciar um objeto do tipo conta");
        }

        this._saldo = saldoinicial;
        this.cliente = cliente;
        this.agencia = agencia;
     
    }

    set cliente(novoValor) { //Set > Atribuição
        if (novoValor instanceof Cliente) {
            this._cliente = novoValor;
        }
    }

    get cliente() { //Get > Retorna
        return this._cliente;
    }

    get saldo() {
        return this._saldo;
    }

    //Método abstrato.
    sacar(valor) {
        throw new Error("O método sacar da conta é abstrato");
    }

    _sacar(valor, taxa){
        const valorSacado = taxa * valor;
        if (this._saldo >= valorSacado) {
            this._saldo -= valorSacado;
            return valorSacado;

        }
        return 0;

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