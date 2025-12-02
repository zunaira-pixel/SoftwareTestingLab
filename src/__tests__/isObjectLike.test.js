const isObjectLike = require('../isObjectLike');

describe('isObjectLike', () => {
    test('returns true for objects', () => {
        expect(isObjectLike({ a: 1 })).toBe(true);
    });

    test('returns true for arrays', () => {
        expect(isObjectLike([1, 2, 3])).toBe(true);
    });

    test('returns false for functions', () => {
        expect(isObjectLike(() => { })).toBe(false);
    });

    test('returns false for null', () => {
        expect(isObjectLike(null)).toBe(false);
    });

    test('returns false for primitives', () => {
        expect(isObjectLike(1)).toBe(false);
        expect(isObjectLike('string')).toBe(false);
    });
});
