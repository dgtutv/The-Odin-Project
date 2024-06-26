/*Game loop functionality*/
const game = function(player1Name, player2Name){
    const createPlayer = (function(playerName){
        let score = 0;
        const increaseScore = () => score++;
        const getScore = () => score;
        return {playerName, increaseScore, getScore};
    });

    const startGame = function(player1, player2){
        //Returns board object
        const createBoard = (function(){
            const board = new Array();
            for(let i=0; i<3; i++){
                for(let j=0; j<3; j++){
                    board[i][j] = ".";
                }
            }

            //Returns true if board is updated, false if it can't be
            const updateBoard = function(x, y, playerNum){
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

            const viewBoard = () => board;

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

            return({updateBoard, viewBoard, checkWinner});
        });
        
        let board = createBoard();

        

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