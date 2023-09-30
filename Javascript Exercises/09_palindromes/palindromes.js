const palindromes = function (string) {
    string = string.replace(/[^\w\s]/g, '');    //Remove punctuation
    string = string.replace(/\s+/g, '');    //Remove white space
    string = string.toLowerCase();
    let forwardCounter = 0;
    for(let i=string.length-1; i>-1; i--){
        if(string[forwardCounter] != string[i]){
            return false;
        }
        forwardCounter++;
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
