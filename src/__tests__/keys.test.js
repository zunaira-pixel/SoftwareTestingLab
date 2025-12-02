const keys = require('../keys');

describe('keys', () => {
    test('returns keys of object', () => {
        expect(keys({ a: 1, b: 2, c: 3 })).toEqual(['a', 'b', 'c']);
    });

    test('returns keys of array', () => {
        expect(keys(['a', 'b', 'c'])).toEqual(['0', '1', '2']);
    });

    test('returns empty array for null', () => {
        expect(keys(null)).toEqual([]);
    });

    test('returns empty array for undefined', () => {
        expect(keys(undefined)).toEqual([]);
    });

    test('returns keys for string', () => {
        expect(keys('hi')).toEqual(['0', '1']);
    });
});
