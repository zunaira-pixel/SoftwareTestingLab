const at = require('../at');

describe('at', () => {
    const array = ['a', 'b', 'c', 'd', 'e'];

    test('selects elements at given indexes', () => {
        expect(at(array, 0, 2, 4)).toEqual(['a', 'c', 'e']);
    });

    test('handles negative indexes', () => {
        expect(at(array, -1, -2)).toEqual(['e', 'd']);
    });

    test('handles array of indexes', () => {
        expect(at(array, [1, 3])).toEqual(['b', 'd']);
    });

    test('returns empty array for empty input', () => {
        expect(at([], 0, 1)).toEqual([]);
    });

    test('ignores out of bounds indexes', () => {
        expect(at(array, 10, -10)).toEqual([]);
    });
});
