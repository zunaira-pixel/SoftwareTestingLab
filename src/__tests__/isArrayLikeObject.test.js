const isArrayLikeObject = require('../isArrayLikeObject');

describe('isArrayLikeObject', () => {
    test('returns true for arrays', () => {
        expect(isArrayLikeObject([1, 2, 3])).toBe(true);
    });

    test('returns true for array-like objects', () => {
        expect(isArrayLikeObject({ length: 3, 0: 'a' })).toBe(true);
    });

    test('returns false for strings', () => {
        expect(isArrayLikeObject('hello')).toBe(false);
    });

    test('returns false for functions', () => {
        expect(isArrayLikeObject(() => { })).toBe(false);
    });

    test('returns false for null', () => {
        expect(isArrayLikeObject(null)).toBe(false);
    });
});
