export class ContaCorrente{

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