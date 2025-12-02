const defaultToAny = require('../defaultToAny');

describe('defaultToAny', () => {
    test('returns first defined value', () => {
        expect(defaultToAny(null, undefined, 10, 20)).toBe(10);
    });

    test('returns value when first is defined', () => {
        expect(defaultToAny(5, 10, 20)).toBe(5);
    });

    test('returns undefined when all are null/undefined', () => {
        expect(defaultToAny(null, undefined, null)).toBeUndefined();
    });

    test('skips NaN', () => {
        expect(defaultToAny(NaN, undefined, 10)).toBe(10);
    });

    test('returns 0 when value is 0', () => {
        expect(defaultToAny(0, 10)).toBe(0);
    });
});
