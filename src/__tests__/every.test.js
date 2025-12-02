const every = require('../every');

describe('every', () => {
    test('returns true when all elements pass predicate', () => {
        expect(every([2, 4, 6], n => n % 2 === 0)).toBe(true);
    });

    test('returns false when some elements fail predicate', () => {
        expect(every([2, 3, 4], n => n % 2 === 0)).toBe(false);
    });

    test('returns true for empty collection', () => {
        expect(every([], n => n > 0)).toBe(true);
    });

    test('works with objects', () => {
        expect(every({ a: 1, b: 2 }, n => n > 0)).toBe(true);
    });

    test('returns true for null input', () => {
        expect(every(null, n => n > 0)).toBe(true);
    });
});
