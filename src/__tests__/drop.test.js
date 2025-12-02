const drop = require('../drop');

describe('drop', () => {
    test('drops first element by default', () => {
        expect(drop([1, 2, 3])).toEqual([2, 3]);
    });

    test('drops specified number of elements', () => {
        expect(drop([1, 2, 3], 2)).toEqual([3]);
    });

    test('drops all elements', () => {
        expect(drop([1, 2, 3], 5)).toEqual([]);
    });

    test('returns empty array for empty input', () => {
        expect(drop([], 1)).toEqual([]);
    });

    test('returns array unchanged when n is 0', () => {
        expect(drop([1, 2, 3], 0)).toEqual([1, 2, 3]);
    });
});
