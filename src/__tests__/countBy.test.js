const countBy = require('../countBy');

describe('countBy', () => {
    test('counts by function result', () => {
        expect(countBy([6.1, 4.2, 6.3], Math.floor)).toEqual({ '4': 1, '6': 2 });
    });

    test('counts by property', () => {
        const users = [
            { user: 'barney', active: true },
            { user: 'betty', active: true },
            { user: 'fred', active: false }
        ];
        expect(countBy(users, 'active')).toEqual({ 'true': 2, 'false': 1 });
    });

    test('returns empty object for null input', () => {
        expect(countBy(null, x => x)).toEqual({});
    });

    test('handles object collection', () => {
        expect(countBy({ a: 1, b: 2, c: 1 }, x => x)).toEqual({ '1': 2, '2': 1 });
    });
});
