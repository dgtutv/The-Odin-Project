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
        playerDisplay.textContent = playerSelection;
        computerDisplay.textContent = computerSelection;
        if(playerSelection == computerSelection){
            result.textContent="Draw";
        }
        else{
            if(playerSelection == "Rock"){
                if(computerSelection == "Paper"){
                    result.textContent="Computer Wins";
                    computerCount++;
                }
                else{
                    result.textContent="Player Wins";
                    playerCount++;
                }
            }
            else if(playerSelection == "Paper"){
                if(computerSelection == "Scissors"){
                    result.textContent="Computer Wins";
                    computerCount++;
                }
                else{
                    result.textContent="Player Wins";
                    playerCount++;
                }
            }
            else{
                if(computerSelection == "Rock"){
                    result.textContent="Computer Wins";
                    computerCount++;
                }
                else{
                    result.textContent="Player Wins";
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

    //Main code
    let playerCount = 0;
    let computerCount = 0;
    const buttons = this.querySelectorAll("button");
    const playerDisplay = this.querySelector("#playerDisplay");
    const computerDisplay = this.querySelector("#computerDisplay");
    const result = document.getElementById("results");
    buttons.forEach(button => button.addEventListener("click", playRound));
})