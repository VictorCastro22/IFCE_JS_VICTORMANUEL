import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta{
    static numeroDeContas = 0;
    constructor(cliente, agencia) {
        super(0,cliente, agencia); //referência classe pai.
        ContaCorrente.numeroDeContas += 1;
    }
    
    //sobreescrevendo o comportamento de sacar
    sacar(valor) {
        let taxa = 1.1;
        return this._sacar(valor, taxa);
    }
}

/*#saldo = 0; //Botando o atributo privado. */
//_saldo = 0; //Mostrandoao usuário que o campo é privado.