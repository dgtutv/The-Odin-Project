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
            if(computerSelection == "Paper"){return "Computer Wins"};
            return "Player Wins";
        }
        else if(playerSelection.toLowerCase() == "paper"){
            if(computerSelection == "Scissors"){return "Computer Wins"};
            return "Player Wins";
        }
        else{
            if(computerSelection == "Rock"){return "Computer Wins"};
            return "Player Wins";
        }
    }
}