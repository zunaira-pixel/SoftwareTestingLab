const toFinite = require('../toFinite');

describe('toFinite', () => {
    test('converts number to finite', () => {
        expect(toFinite(3.2)).toBe(3.2);
    });

    test('converts Infinity to MAX_VALUE', () => {
        expect(toFinite(Infinity)).toBe(Number.MAX_VALUE);
    });

    test('converts -Infinity to -MAX_VALUE', () => {
        expect(toFinite(-Infinity)).toBe(-Number.MAX_VALUE);
    });

    test('converts string to number', () => {
        expect(toFinite('3.2')).toBe(3.2);
    });

    test('returns 0 for NaN', () => {
        expect(toFinite(NaN)).toBe(0);
    });

    test('returns 0 for null', () => {
        expect(toFinite(null)).toBe(0);
    });
});
