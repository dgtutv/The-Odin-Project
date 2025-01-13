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
    // Subtract tests
    // Divide tests
    // Multiply tests
});