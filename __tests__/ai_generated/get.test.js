const get = require('../../src/get');

describe('get (ai_generated extra)', () => {
    const object = { a: { b: { c: 3 } }, '1': 'one' };

    test('numeric path segments work', () => {
        const arr = { a: [ { b: 2 } ] };
        expect(get(arr, 'a[0].b')).toBe(2);
    });

    test('root path returns object', () => {
        expect(get(object, [])).toEqual(object);
    });

    test('non-string keys are handled', () => {
        expect(get(object, 1, 'default')).toBe('one');
    });
});
