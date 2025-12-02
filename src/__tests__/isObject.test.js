const isObject = require('../isObject');

describe('isObject', () => {
    test('returns true for objects', () => {
        expect(isObject({ a: 1 })).toBe(true);
    });

    test('returns true for arrays', () => {
        expect(isObject([1, 2, 3])).toBe(true);
    });

    test('returns true for functions', () => {
        expect(isObject(() => { })).toBe(true);
    });

    test('returns false for null', () => {
        expect(isObject(null)).toBe(false);
    });

    test('returns false for undefined', () => {
        expect(isObject(undefined)).toBe(false);
    });

    test('returns false for primitives', () => {
        expect(isObject(1)).toBe(false);
        expect(isObject('string')).toBe(false);
        expect(isObject(true)).toBe(false);
    });
});
