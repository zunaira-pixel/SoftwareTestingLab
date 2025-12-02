const slice = require('../slice');

describe('slice', () => {
    test('slices array from start to end', () => {
        expect(slice([1, 2, 3, 4], 1, 3)).toEqual([2, 3]);
    });

    test('slices from start to end of array', () => {
        expect(slice([1, 2, 3, 4], 2)).toEqual([3, 4]);
    });

    test('uses default start of 0', () => {
        expect(slice([1, 2, 3])).toEqual([1, 2, 3]);
    });

    test('handles negative indexes', () => {
        expect(slice([1, 2, 3, 4], -2)).toEqual([3, 4]);
    });

    test('returns empty array for non-array input', () => {
        expect(slice('test', 1)).toEqual([]);
    });
});
