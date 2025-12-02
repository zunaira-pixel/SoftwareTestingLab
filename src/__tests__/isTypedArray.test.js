const isTypedArray = require('../isTypedArray');

describe('isTypedArray', () => {
    test('returns true for Uint8Array', () => {
        expect(isTypedArray(new Uint8Array())).toBe(true);
    });

    test('returns true for Int32Array', () => {
        expect(isTypedArray(new Int32Array())).toBe(true);
    });

    test('returns true for Float64Array', () => {
        expect(isTypedArray(new Float64Array())).toBe(true);
    });

    test('returns false for regular array', () => {
        expect(isTypedArray([1, 2, 3])).toBe(false);
    });

    test('returns false for object', () => {
        expect(isTypedArray({ a: 1 })).toBe(false);
    });

    test('returns false for null', () => {
        expect(isTypedArray(null)).toBe(false);
    });
});
