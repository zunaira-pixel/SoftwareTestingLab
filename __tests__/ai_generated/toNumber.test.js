const toNumber = require('../../src/toNumber');

describe('toNumber (ai_generated extra)', () => {
    test('handles hex string as NaN', () => {
        expect(Number.isNaN(toNumber('0x10'))).toBe(true);
    });

    test('handles padded strings', () => {
        expect(toNumber('  42  ')).toBe(42);
    });

    test('object with valueOf returns numeric value', () => {
        const obj = { valueOf() { return 7; } };
        expect(toNumber(obj)).toBe(7);
    });
});
