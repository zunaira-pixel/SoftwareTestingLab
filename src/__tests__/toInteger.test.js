const toInteger = require('../toInteger');

describe('toInteger', () => {
    test('converts number to integer', () => {
        expect(toInteger(3.2)).toBe(3);
    });

    test('converts negative number to integer', () => {
        expect(toInteger(-3.7)).toBe(-3);
    });

    test('converts string to integer', () => {
        expect(toInteger('3.2')).toBe(3);
    });

    test('converts Infinity', () => {
        expect(toInteger(Infinity)).toBe(Number.MAX_VALUE);
    });

    test('returns 0 for NaN', () => {
        expect(toInteger(NaN)).toBe(0);
    });
});
