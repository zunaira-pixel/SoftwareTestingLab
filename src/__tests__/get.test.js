const get = require('../get');

describe('get', () => {
    const object = { a: { b: { c: 3 } } };

    test('gets value at path', () => {
        expect(get(object, 'a.b.c')).toBe(3);
    });

    test('gets value with array path', () => {
        expect(get(object, ['a', 'b', 'c'])).toBe(3);
    });

    test('returns default for undefined path', () => {
        expect(get(object, 'a.b.x', 'default')).toBe('default');
    });

    test('handles array notation', () => {
        const arr = { a: [{ b: 1 }] };
        expect(get(arr, 'a[0].b')).toBe(1);
    });

    test('returns default for null object', () => {
        expect(get(null, 'a.b', 'default')).toBe('default');
    });
});
