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

const sum = function(parameterArray) {
  let sum=0;
  for(let i=0; i<parameterArray.length; i++){
    sum += parameterArray[i];
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

const power = function() {
  let parameters = Array.from(arguments);
	let result = parameters[0];
  for(let i=1; i<parameters.length; i++){
    result = result ** parameters[i];
  }
  return result;
};

const factorial = function() {
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
