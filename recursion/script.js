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

function mergeSort(arr){
    if(arr.length == 1){
        return arr;
    }
    if(arr.length == 2){
        if(arr[0] > arr[1]){
            let temp = arr[1];
            arr[1] = arr[0];
            arr[0] = temp;
        }
        return arr;
    }
    else{
        let mid = Math.floor(arr.length / 2);
        let left = mergeSort(arr.slice(0, mid));
        let right = mergeSort(arr.slice(mid, arr.length));
        console.log(`Left: ${left}, Right: ${right}`);
        for(let arrIt=0; arrIt<arr.length; arrIt++){
            if(left.length == 0){
                for(let i=0; i<right.length; i++){
                    arr[arrIt] = (right[i]);
                    arrIt++;
                }
                break;
            }
            else if(right.length == 0){
                for(let i=0; i<left.length; i++){
                    arr[arrIt] = (left[i]);
                    arrIt++;
                }
                break;
            }
            else if(left[0] < right[0]){
                arr[arrIt] = left[0];
                left.shift();
            }
            else{
                arr[arrIt] = right[0];
                right.shift();
            }
        }
        return arr;
    }
}

mergeSort([3, 2, 1, 13, 8, 5, 0, 1])