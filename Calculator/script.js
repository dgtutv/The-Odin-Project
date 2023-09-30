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
            let openBracketIndex = openBracketIndices.pop();
            let subEquation =  equation.slice(openBracketIndex + 1, i);
            let subResult = compute(subEquation);
            equation = equation.substring(0, openIndex) + subResult + equation.substring(i + 1);
            i = openBracketIndex - 1 ;
            for(let j = 0; j<openBracketIndices.length; j++){
                if(openBracketIndices[j] > openIndex) {
                    openBracketIndices[j] -= (i - openBracketIndex + 1);
                }
            }
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
}