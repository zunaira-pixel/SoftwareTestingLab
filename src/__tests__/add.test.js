const add = require('../add');

describe('add', () => {
    test('adds two positive numbers', () => {
        expect(add(1, 2)).toBe(3);
    });

    test('adds two negative numbers', () => {
        expect(add(-1, -2)).toBe(-3);
    });

    test('adds positive and negative numbers', () => {
        expect(add(5, -3)).toBe(2);
    });

    test('adds with zero', () => {
        expect(add(0, 5)).toBe(5);
        expect(add(5, 0)).toBe(5);
    });

    test('adds decimal numbers', () => {
        expect(add(1.5, 2.3)).toBeCloseTo(3.8);
    });
});
