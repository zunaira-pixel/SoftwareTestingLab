const difference = require('../difference');

describe('difference', () => {
    test('returns values not in other arrays', () => {
        expect(difference([2, 1], [2, 3])).toEqual([1]);
    });

    test('handles multiple exclude arrays', () => {
        expect(difference([1, 2, 3, 4], [2], [3])).toEqual([1, 4]);
    });

    test('returns empty array when all excluded', () => {
        expect(difference([1, 2], [1, 2, 3])).toEqual([]);
    });

    test('returns original array when nothing excluded', () => {
        expect(difference([1, 2, 3], [4, 5])).toEqual([1, 2, 3]);
    });

    test('returns empty array for non-array input', () => {
        expect(difference('test', [1])).toEqual([]);
    });
});
