const reverseString = function(originalString) {
    splitString = originalString.split("");
    let reverseString="";
    for(let i=splitString.length-1; i>-1; i--){
        reverseString = reverseString+splitString[i];
    }
    return reverseString;
};

// Do not edit below this line
module.exports = reverseString;
