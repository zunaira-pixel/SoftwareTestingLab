const ceil = require('../ceil');

describe('ceil', () => {
    test('rounds up to nearest integer', () => {
        expect(ceil(4.006)).toBe(5);
    });

    test('rounds up with precision', () => {
        expect(ceil(6.004, 2)).toBe(6.01);
    });

    test('rounds up with negative precision', () => {
        expect(ceil(6040, -2)).toBe(6100);
    });

    test('handles negative numbers', () => {
        expect(ceil(-4.006)).toBe(-4);
    });

    test('handles zero', () => {
        expect(ceil(0)).toBe(0);
    });
});
