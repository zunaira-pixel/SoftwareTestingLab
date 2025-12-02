const memoize = require('../memoize');

describe('memoize', () => {
    test('memoizes function results', () => {
        let callCount = 0;
        const func = memoize((n) => {
            callCount++;
            return n * 2;
        });

        expect(func(2)).toBe(4);
        expect(func(2)).toBe(4);
        expect(callCount).toBe(1);
    });

    test('uses custom resolver', () => {
        const func = memoize((a, b) => a + b, (...args) => args.join('-'));

        expect(func(1, 2)).toBe(3);
        expect(func(1, 2)).toBe(3);
    });

    test('throws error for non-function', () => {
        expect(() => memoize('not a function')).toThrow(TypeError);
    });

    test('has cache property', () => {
        const func = memoize(n => n);
        expect(func.cache).toBeInstanceOf(Map);
    });
});
