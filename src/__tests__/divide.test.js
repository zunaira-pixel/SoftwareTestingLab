const divide = require('../divide');

describe('divide', () => {
    test('divides two positive numbers', () => {
        expect(divide(6, 2)).toBe(3);
    });

    test('divides with decimal result', () => {
        expect(divide(5, 2)).toBe(2.5);
    });

    test('divides negative numbers', () => {
        expect(divide(-6, 2)).toBe(-3);
    });

    test('divides by zero returns Infinity', () => {
        expect(divide(6, 0)).toBe(Infinity);
    });

    test('divides zero', () => {
        expect(divide(0, 5)).toBe(0);
    });
});
