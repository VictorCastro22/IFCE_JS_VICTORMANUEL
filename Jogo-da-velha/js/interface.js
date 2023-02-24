document.addEventListener("DOMContentLoaded", () => { //Executa ao documento ser carregado.

    let squares = document.querySelectorAll(".square"); //Pega todos os squares do HTML.

    squares.forEach((square)=>{ //Varrer todos os squares que temos.
        square.addEventListener('click', click);
    })
})

function click (event) {

    let square = event.target; //Elemento que recebe o evento.
    let postion = square.id; //Pego o id do elemento.

    movimento(postion); //Passo a posição para a outra função.
    upSquares();

}

function upSquares () { //Verificação, caso esteja o square vazio, ele bota o símbolo da vez do jogador.

    let squares = document.querySelectorAll(".square"); //pegar elemento square

    squares.forEach((square) => {
        
        let postion = square.id
        let symbol = board[postion];

        if (symbol != '') {
            square.innerHTML = `<div class='${symbol}'></div>`
        }

    })

}