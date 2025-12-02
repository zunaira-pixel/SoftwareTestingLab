const isDate = require('../isDate');

describe('isDate', () => {
    test('returns true for Date object', () => {
        expect(isDate(new Date())).toBe(true);
    });

    test('returns false for date string', () => {
        expect(isDate('2021-01-01')).toBe(false);
    });

    test('returns false for number', () => {
        expect(isDate(1234567890)).toBe(false);
    });

    test('returns false for object', () => {
        expect(isDate({ a: 1 })).toBe(false);
    });

    test('returns false for null', () => {
        expect(isDate(null)).toBe(false);
    });
});
