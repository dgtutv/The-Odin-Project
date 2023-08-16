
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

    let playRound = function(playerSelection, computerSelection){
        console.log("Player selection: "+playerSelection);
        console.log("Computer selection: "+computerSelection);
        if(playerSelection.toLowerCase() == computerSelection.toLowerCase()){
            return "Draw";
        }
        else{
            if(playerSelection.toLowerCase() == "rock"){
                if(computerSelection == "Paper"){return "Computer"};
                return "Player";
            }
            else if(playerSelection.toLowerCase() == "paper"){
                if(computerSelection == "Scissors"){return "Computer"};
                return "Player";
            }
            else{
                if(computerSelection == "Rock"){return "Computer"};
                return "Player";
            }
        }
    }

    let game = function(){
        let playerSelection, computerSelection, winner, playerCounter, computerCounter, roundCounter;
        playerCounter = 0;
        computerCounter = 0;
        roundCounter = 0;
        submitButton.addEventListener("click", function () { //Add a click event listener to the button
            if(roundCounter < 5){
                computerSelection = getComputerChoice();
                playerSelection = document.getElementById("input").value;
                if(playerSelection.toLowerCase() != "rock" && playerSelection.toLowerCase() != "paper"
                && playerSelection.toLowerCase() != "scissors"){
                    console.log("Input not valid");
                    return;
                }
                else{
                    winner = playRound(playerSelection, computerSelection);
                    roundCounter++;
                    if(winner == "Player"){
                        playerCounter++;
                        console.log("Player wins round "+String(roundCounter));
                    }
                    else if(winner == "Computer"){
                        computerCounter++;
                        console.log("Computer wins round "+String(roundCounter));
                    }
                    else{
                        console.log("Round "+roundCounter+" is a draw");
                    }
                    if(roundCounter<5){return;}
                    else{
                        if(playerCounter == computerCounter){console.log("The game is a draw!");}
                        else if(playerCounter > computerCounter){console.log("Player wins the game!");}
                        else{console.log("Computer wins the game!");}
                        return;
                    }
                }
            }                
        });     
    }  

    //Main code
    game();
});