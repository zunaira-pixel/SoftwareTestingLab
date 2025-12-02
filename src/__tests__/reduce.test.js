const reduce = require('../reduce');

describe('reduce', () => {
    test('reduces array to single value', () => {
        expect(reduce([1, 2, 3], (sum, n) => sum + n, 0)).toBe(6);
    });

    test('uses first element as initial value when not provided', () => {
        expect(reduce([1, 2, 3], (sum, n) => sum + n)).toBe(6);
    });

    test('works with objects', () => {
        expect(reduce({ a: 1, b: 2, c: 3 }, (sum, n) => sum + n, 0)).toBe(6);
    });

    test('returns accumulator for empty array with initial value', () => {
        expect(reduce([], (sum, n) => sum + n, 10)).toBe(10);
    });

    test('returns undefined for null input', () => {
        expect(reduce(null, (sum, n) => sum + n, 5)).toBe(5);
    });
});
