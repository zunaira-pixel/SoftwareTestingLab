const isBuffer = require('../isBuffer');

describe('isBuffer', () => {
    test('returns true for Buffer', () => {
        if (typeof Buffer !== 'undefined') {
            expect(isBuffer(Buffer.from('test'))).toBe(true);
        } else {
            expect(isBuffer({})).toBe(false);
        }
    });

    test('returns false for array', () => {
        expect(isBuffer([1, 2, 3])).toBe(false);
    });

    test('returns false for object', () => {
        expect(isBuffer({ a: 1 })).toBe(false);
    });

    test('returns false for null', () => {
        expect(isBuffer(null)).toBe(false);
    });
});
