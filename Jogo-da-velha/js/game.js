let board = ["", "", "", "", "", "", "", "", ""];
let playerTime = 0;
let symbols = ["o", "x"];

function movimento (position) { //Pega a posição passada.

    if (board[position] == '') {
        board[position] = symbols[playerTime]; //Coloca o símbolo do jogador da vez.

        if(playerTime == 0){// Alterando a vez dos jogadores
            playerTime = 1;
        } else{
            playerTime = 0;
        }
    }
}