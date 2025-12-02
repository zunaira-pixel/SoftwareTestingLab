const isLength = require('../isLength');

describe('isLength', () => {
    test('returns true for valid length', () => {
        expect(isLength(3)).toBe(true);
    });

    test('returns true for zero', () => {
        expect(isLength(0)).toBe(true);
    });

    test('returns false for negative numbers', () => {
        expect(isLength(-1)).toBe(false);
    });

    test('returns false for decimal numbers', () => {
        expect(isLength(3.5)).toBe(false);
    });

    test('returns false for MAX_SAFE_INTEGER + 1', () => {
        expect(isLength(Number.MAX_SAFE_INTEGER + 1)).toBe(false);
    });

    test('returns false for strings', () => {
        expect(isLength('3')).toBe(false);
    });
});
