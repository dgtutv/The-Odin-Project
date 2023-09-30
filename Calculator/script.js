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

const compute = function(equation) {
    let factorials = [];
    let openBracketIndices = [];
    let closeBracketIndeces = [];
    let powerIndeces = [];
    let divideIndeces = [];
    let multiplyIndeces = [];
    let additionIndeces = [];
    let subtractionIndeces = [];
    for(let i=0; i<equation.length; i++){
        if(equation[i] == '!'){
            factorials.push(factorial(parseInt(equation[i-1])));
        }
        else if(equation[i] == '('){
            openBracketIndices.push(i);
        }
        else if(equation[i] == ')'){
            closeBracketIndeces.push(i);
        }
        else if(equation[i] == '*' && equation[i-1] == '*'){
            powerIndeces.push(i);
        }
        else if(equation[i] == '/'){
            divideIndeces.push(i);
        }
        else if(equation[i] == '*'){
            multiplyIndeces.push(i);
        }
        else if(equation[i] == '+'){
            additionIndeces.push(i);
        }
        else if(equation[i] == '-'){
            subtractionIndeces.push(i);
        }
    }
    //Find the first opening bracket and the last closing bracket, narrow in to the most nested bracket
    
}