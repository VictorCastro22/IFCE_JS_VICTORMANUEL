import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta{
    static numeroDeContas = 0;

    /*#saldo = 0; //Botando o atributo privado. */
    //_saldo = 0; //Mostrandoao usuário que o campo é privado.
    
    constructor(cliente, agencia){
        super(0, cliente, agencia);
        ContaCorrente.numeroDeContas += 1;

    }
    
}