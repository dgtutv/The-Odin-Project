document.addEventListener("DOMContentLoaded", function () { //Wait for the DOM to be fully loaded
    //Declarations
    const submitButton = document.getElementById("submitButton");
    
    //Function Definitions
    let getComputerChoice = function(){
        const randomDecimal = Math.random();    //Generate a random decimal number between 0 and 1
        const randomNumber = Math.floor(randomDecimal*3)+1  //Convert the decimal number to an integer between 1 & 3
        if(randomNumber == 1){ 
            return "Rock";
        }
        else if(randomNumber == 2){ 
            return "Paper";
        }
        else{
            return "Scissors"
        }
    }

    let playRound = function(e){
        let playerSelection = this.id;
        let computerSelection = getComputerChoice();
        playerDisplay.textContent = `Player Selection: ${playerSelection}`;
        computerDisplay.textContent = `Computer Selection: ${computerSelection}`;
        if(playerSelection == computerSelection){
            result.textContent="Results: Draw";
        }
        else{
            if(playerSelection == "Rock"){
                if(computerSelection == "Paper"){
                    result.textContent="Results: Computer Wins";
                    computerCount++;
                }
                else{
                    result.textContent="Results: Player Wins";
                    playerCount++;
                }
            }
            else if(playerSelection == "Paper"){
                if(computerSelection == "Scissors"){
                    result.textContent="Results: Computer Wins";
                    computerCount++;
                }
                else{
                    result.textContent="Results: Player Wins";
                    playerCount++;
                }
            }
            else{
                if(computerSelection == "Rock"){
                    result.textContent="Results: Computer Wins";
                    computerCount++;
                }
                else{
                    result.textContent="Results: Player Wins";
                    playerCount++;
                }
            }
        }
        if(playerCount == 5 && computerCount<playerCount){
            console.log("player is overall winner");
        }
        else if(computerCount == 5 && playerCount<computerCount){
            console.log("computer is overall winner");
        }
    }

    let game = function(){
        startGameButton.style.display = "none"; //Hide the start game button
        body.style.justifyContent = "space-evenly";

        //Un-hide and fill in our table
        

        //un-hide the player selection, computer selection, and results
        playerDisplay.style.display = "block";
        computerDisplay.style.display = "block";
        result.style.display = "block";

        gameButtons.forEach(button => button.style.display = "block"); //Show the rock, paper & scissor buttons
    }

    //Main code
    const body = this.querySelector("body");
    const startGameButton = this.querySelector(".startGameButton");
    const gameButtons = this.querySelectorAll(".selectionButton");
    startGameButton.addEventListener("click", game);
    let playerCount = 0;
    let computerCount = 0;
    const playerDisplay = this.querySelector("#playerDisplay");
    const computerDisplay = this.querySelector("#computerDisplay");
    const result = document.getElementById("results");
    gameButtons.forEach(button => button.addEventListener("click", playRound));
})