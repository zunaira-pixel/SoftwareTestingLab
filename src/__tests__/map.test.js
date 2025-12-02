const map = require('../map');

describe('map', () => {
    test('maps array elements', () => {
        expect(map([1, 2, 3], n => n * 2)).toEqual([2, 4, 6]);
    });

    test('maps object values', () => {
        expect(map({ a: 1, b: 2 }, n => n * 2)).toEqual([2, 4]);
    });

    test('returns empty array for null', () => {
        expect(map(null, n => n * 2)).toEqual([]);
    });

    test('passes index to iteratee', () => {
        expect(map([1, 2], (n, i) => n + i)).toEqual([1, 3]);
    });
});
