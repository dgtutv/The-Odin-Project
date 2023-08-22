const removeItemFromArray = function(array, item){
    let index = array.indexOf(item);
    if(index > -1){
        array.splice(index, 1);
    }
    return array;
}

const removeFromArray = function(array, ...args) {
    for(let i=0; i<args.length; i++){
        array = removeItemFromArray(array, args[i]);
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
