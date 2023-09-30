const fibonacci = function(index) {
    if(index < 0){
        return("OOPS");
    }
    else if(index == 0){
        return 0;
    }
    else if(index == 1){
        return 1;
    }
    else if(index  == 2){
        return 1;
    }
    else{
        let prevNum=0;
        let currNum=1;
        for(let i=2; i<parseInt(index)+1; i++){
            nextNum=currNum+prevNum;
            prevNum=currNum;
            currNum=nextNum;
        }
        return nextNum;
    }
};

// Do not edit below this line
module.exports = fibonacci;
