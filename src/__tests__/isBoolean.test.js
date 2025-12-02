const isBoolean = require('../isBoolean');

describe('isBoolean', () => {
    test('returns true for true', () => {
        expect(isBoolean(true)).toBe(true);
    });

    test('returns true for false', () => {
        expect(isBoolean(false)).toBe(true);
    });

    test('returns true for Boolean object', () => {
        expect(isBoolean(new Boolean(true))).toBe(true);
    });

    test('returns false for null', () => {
        expect(isBoolean(null)).toBe(false);
    });

    test('returns false for string', () => {
        expect(isBoolean('true')).toBe(false);
    });

    test('returns false for number', () => {
        expect(isBoolean(1)).toBe(false);
    });
});
