const removeItemFromArray = function(array, item){
    let index = array.indexOf(item);
    if(index > -1){
        array.splice(index, 1);
    }
    return array;
}

const removeFromArray = function(array, ...args) {
    for(element in args){
        array = removeItemFromArray(array, element);
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
