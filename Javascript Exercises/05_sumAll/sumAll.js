const sumAll = function(start, end) {
    if(end<start){
        let temp=end;
        end=start;
        start=temp;
    }
    if(start<0 || end<0){
        return "ERROR";
    }
    if(typeof(start) != "number" || typeof(end) != "number"){
        return "ERROR";
    }
    let sum=start;
    for(let i=start+1; i<end+1; i++){
        sum+=i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
