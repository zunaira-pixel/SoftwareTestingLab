const isSymbol = require('../isSymbol');

describe('isSymbol', () => {
    test('returns true for symbols', () => {
        expect(isSymbol(Symbol('test'))).toBe(true);
    });

    test('returns true for Symbol object', () => {
        expect(isSymbol(Object(Symbol('test')))).toBe(true);
    });

    test('returns false for string', () => {
        expect(isSymbol('symbol')).toBe(false);
    });

    test('returns false for number', () => {
        expect(isSymbol(1)).toBe(false);
    });

    test('returns false for null', () => {
        expect(isSymbol(null)).toBe(false);
    });
});
