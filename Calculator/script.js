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

const power = function(parameters) {
    let result = parameters[0];
    for(let i=1; i<parameters.length; i++){
      result = result ** parameters[i];
    }
    return result;
};
  
const factorial = function(parameter) {
    let result=1;
        for(let i=2; i<parameter+1; i++){
        result = result * i;
    }
    return result;
};