const isArguments = require('../isArguments');

describe('isArguments', () => {
    test('identifies arguments object', () => {
        function test() {
            expect(isArguments(arguments)).toBe(true);
        }
        test();
    });

    test('returns false for array', () => {
        expect(isArguments([1, 2, 3])).toBe(false);
    });

    test('returns false for object', () => {
        expect(isArguments({ a: 1 })).toBe(false);
    });

    test('returns false for null', () => {
        expect(isArguments(null)).toBe(false);
    });

    test('returns false for string', () => {
        expect(isArguments('test')).toBe(false);
    });
});
