/*Game loop functionality*/
const game = function(player1Name, player2Name){
    const createPlayer = (function(name){
        let score = 0;
        const increaseScore = () => score++;
        const getScore = () => score;
        return {name, increaseScore, getScore};
    });

    const startGame = function(player1, player2){
        //Returns board object
        const createBoard = (function(){
            const board = [[".",".","."],[".",".","."],[".",".","."]];

            //Returns true if board is updated, false if it can't be
            const update = function(x, y, playerNum){
                if(board[x][y] === "."){
                    if(playerNum === 0){
                        board[x][y] = "X";
                        return true;
                    }
                    else if(playerNum === 1){
                        board[x][y] = "Y";
                        return true;
                    }
                    return false;
                }
                else{
                    return false;
                }
            }

            const view = () => board;

            //If player 1 wins, returns 1. If player 2 wins, returns 2
            //Upon error; returns -1. If no winner, returns 0
            function checkWinner(){
                //If three match in a column
                for(let x=0; x<3; x++){
                    const row1 = board[x][0];
                    const row2 = board[x][1];
                    const row3 = board[x][2];

                    if(row1 != "." && row1 === row2 && row2 === row3){
                        if(row1 === "X"){
                            return 1;
                        }
                        if(row1 ==="O"){
                            return 2;
                        }
                        return -1;
                    }
                }
                //If three match in a row
                for(let y=0; y<3; y++){
                    const col1 = board[0][y];
                    const col2 = board[1][y];
                    const col3 = board[2][y];

                    if(col1 != "." && col1 === col2 && col2 === col3){
                        if(col1 === "X"){
                            return 1;
                        }
                        if(col1 === "O"){
                            return 2;
                        }
                        return -1;
                    }
                }
                //If three match diagonally
                const topLeft = board[0][0];
                const topRight = board[2][0];
                const middle = board[1][1];
                const bottomLeft = board[0][2];
                const bottomRight = board[2][2];
                if(middle != "."){
                    if(topLeft === middle && middle === bottomRight){
                        if(middle === "X"){
                            return 1;
                        }
                        if(middle === "O"){
                            return 2;
                        }
                        return -1;
                    }
                    if(topRight === middle && middle === bottomLeft){
                        if(middle ==="X"){
                            return 1;
                        }
                        if(middle === "O"){
                            return 2;
                        }
                        return -1;
                    }
                }
                return 0;
            }

            function print() {
                for(let y=0; y<3; y++){
                    let row = "";
                    for(let x=0; x<3; x++){
                        row += board[y][x];
                        if (x < 2) {
                            row += " | ";
                        }
                    }
                    console.log(row);
                    if (y < 2) {
                        console.log("---------");
                    }
                }
            }
            return({update, view, checkWinner, print});
        });
        
        let board = createBoard();
        while(board.checkWinner() === 0){
            for(let i=0; i<2; i++){
                console.log(`Player ${i+1}'s turn!`);
                board.print();
                let placement = prompt("Enter coordinates (x y):");
                let x = parseInt(placement.charAt(0));
                let y = parseInt(placement.charAt(2));
                let update = board.update(x, y, i);
                if(!update){
                    console.log("Cannot place there!");
                    i--;
                    continue;
                }
            }
        }
        
        const winner = checkWinner();
        if(winner === 1){
            player1.increaseScore();
        }
        else if(winner === 2){
            player2.increaseScore();
        }
        else{
            console.log("ERROR");
            return false;
        }

        let answer = prompt(`Player: ${winner.name} wins! \n Would you like to play again? (y/n)`);
        if(answer === "y"){
            return true;
        }
        else{
            return false;
        }
    }
    let player1 = createPlayer(player1Name);
    let player2 = createPlayer(player2Name);
    const playAgain = startGame(player1, player2);
    while(playAgain){
        playAgain = startGame(player1, player2);
    }
    const winner = player1.score > player2.score ? player1 : player2;
    return(winner);
};

let player1Name = prompt("Player 1 (X), what is your name?");
let player2Name = prompt("Player 2 (O), what is your name?");
game(player1Name, player2Name);