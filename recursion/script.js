function fibs(length){
    if(length <= 0){
        return [];
    }    
    if(length == 1){
        return [0];
    }
    if(length == 2){
        return [0, 1];
    }
    else{
        let arr = [0, 1];
        for(let i=2; i<length; i++){
            arr.push(arr[i-1] + arr[i-2]);
        }
        return arr;
    }
}

function fibsRecur(length){
    if(length <= 0){
        return [];
    }    
    if(length == 1){
        return [0];
    }
    if(length == 2){
        return [0, 1];
    }
    else{
        priorArr = fibsRecur(length-1);
        priorArr.push(priorArr[length-2] + priorArr[length-3]);
        return priorArr;
    }
}

