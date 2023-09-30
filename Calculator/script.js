const add = function() {
    let parameters = Array.from(arguments);
    let sum = 0;
    for(let i=0; i<parameters.length; i++){
      sum += parameters[i];
    }
    return sum;
  };
  
  const subtract = function() {
    let parameters = Array.from(arguments);
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