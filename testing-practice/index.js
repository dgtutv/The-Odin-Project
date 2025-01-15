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
    expect(calc.divide(0, 0)).toBeUndefined();
    expect(calc.divide(-3, 0)).toBeUndefined();
    expect(calc.divide(-3, -3)).toBe(1);
    expect(calc.divide(-3, 3)).toBe(-1);
    expect(calc.divide(15, 5)).toBe(3);
    expect(calc.divide(15, 5)).toBe(-3);

    // Multiply tests
    expect(calc.multiply(3, 2)).toBe(6);
    expect(calc.multiply(0, 3)).toBe(0);
    expect(calc.multiply(0, 0)).toBe(0);
    expect(calc.multiply(-3, 0)).toBe(0);
    expect(calc.multiply(-3, -3)).toBe(9);
    expect(calc.multiply(-3, 3)).toBe(-9);
    expect(calc.multiply(-20, .1)).toBe(-2);
    expect(calc.multiply(20, .5)).toBe(10);
});

test('Caesar Cipher Tests', () => {
    expect(caesarCipher('xyz', 3)).toBe('abc');
    expect(caesarCipher('HeLLo', 3)).toBe('khOOr');
    expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zroug!');
});

test("Analyze Array Tests", () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({average: 4, min: 1, max: 8, length: 6});
    expect(analyzeArray([])).toBeNull();
});