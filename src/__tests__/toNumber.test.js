const toNumber = require('../toNumber');

describe('toNumber', () => {
    test('returns number as is', () => {
        expect(toNumber(3.2)).toBe(3.2);
    });

    test('converts string to number', () => {
        expect(toNumber('3.2')).toBe(3.2);
    });

    test('converts binary string', () => {
        expect(toNumber('0b101')).toBe(5);
    });

    test('converts octal string', () => {
        expect(toNumber('0o10')).toBe(8);
    });

    test('returns NaN for Symbol', () => {
        expect(toNumber(Symbol('test'))).toBe(NaN);
    });

    test('converts boolean', () => {
        expect(toNumber(true)).toBe(1);
        expect(toNumber(false)).toBe(0);
    });
});
