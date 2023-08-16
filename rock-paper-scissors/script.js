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