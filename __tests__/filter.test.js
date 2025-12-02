const filter = require('../src/filter');

describe('filter', () => {
    test('filters array by predicate', () => {
        expect(filter([1, 2, 3, 4], n => n % 2 === 0)).toEqual([2, 4]);
    });

    test('returns empty array when no matches', () => {
        expect(filter([1, 3, 5], n => n % 2 === 0)).toEqual([]);
    });

    test('works with objects', () => {
        expect(filter({ a: 1, b: 2, c: 3 }, n => n > 1)).toEqual([2, 3]);
    });

    test('returns empty array for null input', () => {
        expect(filter(null, n => n > 0)).toEqual([]);
    });

    test('returns all elements when all match', () => {
        expect(filter([2, 4, 6], n => n % 2 === 0)).toEqual([2, 4, 6]);
    });
});
