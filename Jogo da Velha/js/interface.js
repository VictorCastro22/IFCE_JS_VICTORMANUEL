document.addEventListener("DOMContentLoaded", () => { //Executa ao documento ser carregado.

    let squares = document.querySelectorAll(".square"); //Pega todos os squares do HTML.

    squares.forEach((square)=>{ //Varrer todos os squares que temos.
        square.addEventListener('click', click);
    })
})

function click (event) {

    let square = event.target; //Elemento que recebe o evento.
    let postion = square.id; //Pego o id do elemento.

    if (movimento(postion)) {

        setTimeout(() => { //Travar um tempo para aparecer a última mensagem.
            alert("O jogo acabou, o vencedor foi: " + playerTime);
        }, 10);

    }; //Passo a posição para a outra função.
    upSquare(postion);

}

function upSquare(postion) {
    
    let square = document.getElementById(postion.toString());
    let symbol = board[postion];
    square.innerHTML = `<div class='${symbol}'></div>`

}


/*function upSquares () { //Verificação, caso esteja o square vazio, ele bota o símbolo da vez do jogador.

    let squares = document.querySelectorAll(".square"); //pegar elemento square

    squares.forEach((square) => {
        
        let postion = square.id
        let symbol = board[postion];

        if (symbol != '') {
            square.innerHTML = `<div class='${symbol}'></div>`
        }

    })

}*/