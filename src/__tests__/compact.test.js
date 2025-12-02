const compact = require('../compact');

describe('compact', () => {
    test('removes falsey values', () => {
        expect(compact([0, 1, false, 2, '', 3, null, undefined, NaN])).toEqual([1, 2, 3]);
    });

    test('keeps truthy values', () => {
        expect(compact([1, 'a', true, {}, []])).toEqual([1, 'a', true, {}, []]);
    });

    test('returns empty array for all falsey', () => {
        expect(compact([false, null, 0, '', undefined, NaN])).toEqual([]);
    });

    test('returns empty array for empty input', () => {
        expect(compact([])).toEqual([]);
    });

    test('returns empty array for non-array input', () => {
        expect(compact('test')).toEqual([]);
    });
});
