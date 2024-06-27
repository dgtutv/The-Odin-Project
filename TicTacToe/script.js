/*Global game variables*/
let Xturn = false;
let gameGoing = true;
let numTurns = 0;
let tie = false;

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
            const update = function(id, playerNum){
                let x, y;
                switch(id){
                    case 0:
                        x = 0;
                        y = 0;
                    case 1:
                        x = 1;
                        y = 0;
                    case 2:
                        x = 2;
                        y = 0;
                    case 3:
                        x = 0;
                        y = 1;
                    case 4:
                        x = 1;
                        y = 1;
                    case 5:
                        x = 2;
                        y = 1;
                    case 6:
                        x = 0;
                        y = 2;
                    case 7:
                        x = 1;
                        y = 2;
                    case 8:
                        x = 2;
                        y = 2;
                }
                if(board[x][y] === "."){
                    if(playerNum === 0){
                        board[x][y] = "X";
                        return true;
                    }
                    else if(playerNum === 1){
                        board[x][y] = "O";
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
            //Upon error; returns -1. If no winner, returns 0. Returns 3 upon tie
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

                //If the number of turns is 9, the game is a tie. Return 3
                if(numTurns === 9){
                    numTurns = 0;
                    return 3;
                }
                return 0;
            }

            function print() {
                for(let y=0; y<3; y++){
                    let row = "";
                    for(let x=0; x<3; x++){
                        row += board[x][y];
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

            function generateDOM(){
                const board = document.querySelector("#board");
                board.innerHTML = "";
                for(let i=0; i<9; i++){
                    let newSlot = document.createElement("div");
                    newSlot.classList.add("slot");
                    newSlot.id = `${i}`;
                    newSlot.style.gridColumn = `${(i % 3) + 1}`;
                    newSlot.style.gridRow = `${Math.floor(i / 3) + 1}`;
                    board.appendChild(newSlot);

                    newSlot.addEventListener("click", function(e){
                        if(newSlot.innerHTML === ""){
                            if(Xturn){
                                newSlot.innerHTML = "X";
                                newSlot.classList.add("x");
                                update(newSlot.id, 0)
                            }
                            else{
                                newSlot.innerHTML = "O";
                                newSlot.classList.add("o");
                                update(newSlot.id, 1);
                            }
                            Xturn = !Xturn;
                            winningPlayer = checkWinner();
                            if(winningPlayer === 1){
                                player1.increaseScore();
                                gameGoing = false;
                            }
                            else if(winningPlayer === 2){
                                player2.increaseScore();
                                gameGoing = false;
                            }
                            else if(winningPlayer === 3){
                                gameGoing = false;
                                tie = true;
                            }
                            numTurns++;
                        }
                    });
                }
            }

            return({update, view, checkWinner, print, generateDOM});
        });
        
        let board = createBoard();
        tie = false;
        board.generateDOM();
        while(gameGoing);   //Busy wait until game is concluded
        let answer
        if(tie){
            answer = prompt(`Player: ${winningPlayer.name} wins! \n Would you like to play again? (y/n)`);
        }
        else{
            answer = prompt(`Tie game! \n Would you like to play again? (y/n)`);
        }
         
        if(answer === "y"){
            return true;
        }
        else{
            return false;
        }
    }
        
    let player1 = createPlayer(player1Name);
    let player2 = createPlayer(player2Name);
    let playAgain = startGame(player1, player2);
    while(playAgain){
        gameGoing = true;
        playAgain = startGame(player1, player2);
    }
    return([player1, player2]);
};

let player1Name = prompt("Player 1 (X), what is your name?");
let player2Name = prompt("Player 2 (O), what is your name?");
let [player1, player2] = game(player1Name, player2Name);
if(player1.getScore() == player2.getScore()){
    console.log("Tie!");
}
else{
    if(player1.getScore() > player2.getScore()){
        console.log(`${player1.name} won!`);
    }
    else{
        console.log(`${player2.name} won!`);
    }
}
console.log(`${player1.name}: ${player1.getScore()} points`);
console.log(`${player2.name}: ${player2.getScore()} points`);


