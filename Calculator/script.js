const add = function(parameters) {
    let sum = 0;
    for(let i=0; i<parameters.length; i++){
      sum += parameters[i];
    }
    return sum;
  };
  
const subtract = function(parameters) {
    let sum = parameters[0];
    for(let i=1; i<parameters.length; i++){
        sum -= parameters[i];
    }
    return sum;
};

const multiply = function(parameters) {
    let product = parameters[0];
    for(let i=1; i<parameters.length; i++){
        product = product * parameters[i];
    }
    return product;
};

const divide = function(parameters) {
    let quotient = parameters[0];
    for(let i=1; i<parameters.length; i++){
        quotient = quotient / parameters[i];
    }
    return quotient;
};