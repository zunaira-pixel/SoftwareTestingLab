const clamp = require('../clamp');

describe('clamp', () => {
    test('clamps number within bounds', () => {
        expect(clamp(10, 5, 15)).toBe(10);
    });

    test('clamps to lower bound', () => {
        expect(clamp(3, 5, 15)).toBe(5);
    });

    test('clamps to upper bound', () => {
        expect(clamp(20, 5, 15)).toBe(15);
    });

    test('handles negative numbers', () => {
        expect(clamp(-10, -5, 5)).toBe(-5);
    });

    test('handles two arguments (only upper bound)', () => {
        expect(clamp(10, 5)).toBe(5);
    });
});
