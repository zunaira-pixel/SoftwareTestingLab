const toString = require('../toString');

describe('toString', () => {
    test('returns string as is', () => {
        expect(toString('hello')).toBe('hello');
    });

    test('converts number to string', () => {
        expect(toString(123)).toBe('123');
    });

    test('returns empty string for null', () => {
        expect(toString(null)).toBe('');
    });

    test('returns empty string for undefined', () => {
        expect(toString(undefined)).toBe('');
    });

    test('converts array to string', () => {
        expect(toString([1, 2, 3])).toBe('1,2,3');
    });

    test('converts Symbol to string', () => {
        const sym = Symbol('test');
        expect(toString(sym)).toBe(sym.toString());
    });

    test('handles -0', () => {
        expect(toString(-0)).toBe('-0');
    });
});
