const castArray = require('../castArray');

describe('castArray', () => {
    test('wraps non-array value in array', () => {
        expect(castArray(1)).toEqual([1]);
    });

    test('returns array as is', () => {
        expect(castArray([1, 2, 3])).toEqual([1, 2, 3]);
    });

    test('wraps object in array', () => {
        expect(castArray({ a: 1 })).toEqual([{ a: 1 }]);
    });

    test('wraps string in array', () => {
        expect(castArray('hello')).toEqual(['hello']);
    });

    test('returns empty array when no arguments', () => {
        expect(castArray()).toEqual([]);
    });

    test('wraps null in array', () => {
        expect(castArray(null)).toEqual([null]);
    });
});
