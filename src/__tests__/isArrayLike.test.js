const isArrayLike = require('../isArrayLike');

describe('isArrayLike', () => {
    test('returns true for arrays', () => {
        expect(isArrayLike([1, 2, 3])).toBe(true);
    });

    test('returns true for strings', () => {
        expect(isArrayLike('hello')).toBe(true);
    });

    test('returns true for array-like objects', () => {
        expect(isArrayLike({ length: 3, 0: 'a', 1: 'b', 2: 'c' })).toBe(true);
    });

    test('returns false for functions', () => {
        expect(isArrayLike(() => { })).toBe(false);
    });

    test('returns false for null', () => {
        expect(isArrayLike(null)).toBe(false);
    });

    test('returns false for objects without length', () => {
        expect(isArrayLike({ a: 1 })).toBe(false);
    });
});
