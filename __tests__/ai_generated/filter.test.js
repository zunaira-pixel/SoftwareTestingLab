const filter = require('../../src/filter');

describe('filter (ai_generated extra)', () => {
    test('non-function predicate returns empty array', () => {
        expect(filter([1,2,3], null)).toEqual([]);
    });


    test('handles sparse arrays', () => {
        const arr = [];
        arr[2] = 3;
        expect(filter(arr, n => typeof n !== 'undefined')).toEqual([3]);
    });
});
