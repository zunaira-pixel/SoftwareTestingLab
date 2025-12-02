const chunk = require('../chunk');

describe('chunk', () => {
    test('chunks array into groups of specified size', () => {
        expect(chunk(['a', 'b', 'c', 'd'], 2)).toEqual([['a', 'b'], ['c', 'd']]);
    });

    test('handles remainder elements', () => {
        expect(chunk(['a', 'b', 'c', 'd'], 3)).toEqual([['a', 'b', 'c'], ['d']]);
    });

    test('returns empty array for empty input', () => {
        expect(chunk([], 2)).toEqual([]);
    });

    test('uses default size of 1', () => {
        expect(chunk(['a', 'b'])).toEqual([['a'], ['b']]);
    });

    test('returns empty array for size 0', () => {
        expect(chunk(['a', 'b'], 0)).toEqual([]);
    });

    test('returns single chunk when size >= array length', () => {
        expect(chunk(['a', 'b'], 5)).toEqual([['a', 'b']]);
    });
});
