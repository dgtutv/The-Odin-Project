/*Game loop functionality*/
const game = (function(player1Name, player2Name){
    /*Objects*/
    const createPlayer = (function(playerName){
        let score = 0;
        const increaseScore = () => score++;
        const getScore = () => score;
        return {playerName, increaseScore, getScore};
    });
    

    /*Logic*/
    const player1 = createPlayer(player1Name);
    const player2 = createPlayer(player2Name);
    const playAgain = startGame(player1, player2);
    while(playAgain){
        playAgain = startGame(player1, player2);
    }
    const winner = player1.score > player2.score ? player1 : player2;
    return(winner);
});