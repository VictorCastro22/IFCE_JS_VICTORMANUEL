// Escreva uma função que receba dois números e retorne o maior valor.
function retornaMaior (x, y) {
    if (x > y) {
        console.log("O maior valor é", x)
    }
    else if(x < y) {
        console.log("O maior valor é", y);
    }
    else{
        console.log("Os valores são iguais");
    }
}

retornaMaior(15, 15);