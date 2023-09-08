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
        const playerWinsBox = document.getElementById('playerWinsBox');
        const computerWinsBox = document.getElementById('computerWinsBox');
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
            playerWins++;
            playerCount = 0;
            computerCount = 0;
        }
        else if(computerCount == 5 && playerCount<computerCount){
            computerWins++;
            playerCount = 0;
            computerCount = 0;
        }

        playerWinsBox.textContent = playerWins;
        computerWinsBox.textContent = computerWins;
    }

    let game = function(){
        startGameButton.remove(); //Delete the start game button
        body.style.justifyContent = "space-evenly";

        //Un-hide and fill in our table
        const tableHead = document.createElement('thead');
        const tableBody = document.createElement('tbody');
        const headerRow = document.createElement('tr');
        const playerHeader = document.createElement('th');
        const computerHeader = document.createElement('th');
        const winsRow = document.createElement('tr');
        const playerWinsBox = document.createElement('td');
        const computerWinsBox = document.createElement('td');
        playerHeader.textContent = "Player Wins";
        computerHeader.textContent = "Computer Wins"
        playerWinsBox.textContent = playerWins;
        computerWinsBox.textContent = computerWins;
        playerWinsBox.id = "playerWinsBox";
        computerWinsBox.id = "computerWinsBox";

        resultsTable.appendChild(tableHead); 
        resultsTable.appendChild(tableBody);
        tableHead.appendChild(headerRow);
        headerRow.appendChild(playerHeader);
        headerRow.appendChild(computerHeader);
        tableBody.appendChild(winsRow);
        winsRow.appendChild(playerWinsBox);
        winsRow.appendChild(computerWinsBox);

        //un-hide the player selection, computer selection, and results
        playerDisplay.style.display = "block";
        computerDisplay.style.display = "block";
        result.style.display = "block";

        gameButtons.forEach(button => button.style.display = "block"); //Show the rock, paper & scissor buttons

        //Adjust the margins of gameplay elements
        gameButtons.forEach(button => button.style.margin = "0 64px 0 0"); 
        gameplayResults.style.margin = "0 128px 0 64px";
        resultsTable.style.margin = "0 0 0 64px";

    }

    //Main code
    const body = this.querySelector("body");
    const startGameButton = this.querySelector(".startGameButton");
    const gameButtons = this.querySelectorAll(".selectionButton");
    startGameButton.addEventListener("click", game);
    let playerCount = 0;
    let computerCount = 0;
    let playerWins = 0;
    let computerWins = 0;
    const playerDisplay = this.querySelector("#playerDisplay");
    const computerDisplay = this.querySelector("#computerDisplay");
    const result = document.getElementById("results");
    const resultsTable = this.querySelector("#resultsTable");
    const gameplayResults = this.querySelector(".gameplayResults");
    gameButtons.forEach(button => button.addEventListener("click", playRound));
})