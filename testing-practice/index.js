function capitalize(original){
    return(original.charAt(0).toUpperCase().concat(original.slice(1)));
}

function reverseString(original){
    let returnString = "";
    for(let i=original.length-1; i>-1; i--){
        returnString = returnString.concat(original.charAt(i));
    }
    return returnString;
}

class Calculator{
    add(numOne, numTwo){
        return numOne + numTwo;
    }

    subtract(numOne, numTwo){
        return numOne - numTwo;
    }

    divide(numOne, numTwo){
        return numOne / numTwo;
    }

    multiply(numOne, numTwo){
        return numOne * numTwo;
    }
}

function caesarCipher(original, iterator){
    let returnString = "";
    for(let i=0; i<original.length; i++){
        let origCode = original.charCodeAt(i);
        let newCode;
        if(origCode > 64 && origCode < 91){
            newCode = ((origCode + iterator - 65) % 26) + 65;
        }
        else if (origCode > 96 && origCode < 123){
            newCode = ((origCode + iterator - 97) % 26) + 97;
        }
        else{
            newCode = origCode;
        }
        returnString = returnString.concat(String.fromCharCode(newCode));
    }

    return returnString;
}

function analyzeArray(original){
    if(original.length == 0){
        return({average: 0, min: 0, max: 0, length: 0});
    }
    let min = original[0];
    let max = original[0];
    let length = original.length;
    let sum = 0;
    for(let i=0; i<original.length; i++){
        let curr = original[i];
        if(curr < min){
            min = curr;
        }
        if(curr > max){
            max = curr;
        }
        sum += curr;
    }
    let average = sum / original.length;
    
    return({average: average, min: min, max: max, length: length});
}

test('Capitalize Tests', () => {
    expect(capitalize('capital')).toBe('Capital');
    expect(capitalize('Capital')).toBe('Capital');
    expect(capitalize('32free')).toBe('32free');
    expect(capitalize('z')).toBe('Z');
});

test('Reverse String Tests', () => {
    expect(reverseString('test')).toBe('tset');
    expect(reverseString('racecar')).toBe('racecar');
    expect(reverseString('Racecar')).toBe('racecaR');
    expect(reverseString('race Car')).toBe('raC ecar');
});

test('Calculator Tests', () => {
    const calc = new Calculator();
    // Add tests
    expect(calc.add(3, 2)).toBe(5);
    expect(calc.add(0, 3)).toBe(3);
    expect(calc.add(0, 0)).toBe(0);
    expect(calc.add(-3, 0)).toBe(-3);
    expect(calc.add(-3, -2)).toBe(-5);
    expect(calc.add(-3, 2)).toBe(-1);

    // Subtract tests
    expect(calc.subtract(3, 2)).toBe(1);
    expect(calc.subtract(0, 3)).toBe(-3);
    expect(calc.subtract(0, 0)).toBe(0);
    expect(calc.subtract(-3, 0)).toBe(-3);
    expect(calc.subtract(-3, -2)).toBe(-1);
    expect(calc.subtract(-3, 2)).toBe(-5);

    // Divide tests
    expect(calc.divide(3, 2)).toBe(3/2);
    expect(calc.divide(0, 3)).toBe(0);
    expect(calc.divide(0, 0)).toBe(NaN);
    expect(calc.divide(-3, 0)).toBe(-Infinity);
    expect(calc.divide(-3, -3)).toBe(1);
    expect(calc.divide(-3, 3)).toBe(-1);
    expect(calc.divide(15, 5)).toBe(3);
    expect(calc.divide(-15, 5)).toBe(-3);

    // Multiply tests
    expect(calc.multiply(3, 2)).toBe(6);
    expect(calc.multiply(0, 3)).toBe(0);
    expect(calc.multiply(0, 0)).toBe(0);
    expect(calc.multiply(-3, 0)).toBe(-0);
    expect(calc.multiply(-3, -3)).toBe(9);
    expect(calc.multiply(-3, 3)).toBe(-9);
    expect(calc.multiply(-20, .1)).toBe(-2);
    expect(calc.multiply(20, .5)).toBe(10);
});

test('Caesar Cipher Tests', () => {
    expect(caesarCipher('xyz', 3)).toBe('abc');
    expect(caesarCipher('HeLLo', 3)).toBe('KhOOr');
    expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
});

test("Analyze Array Tests", () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({average: 4, min: 1, max: 8, length: 6});
    expect(analyzeArray([])).toEqual({"average": 0, "length": 0, "max": 0, "min": 0});
});