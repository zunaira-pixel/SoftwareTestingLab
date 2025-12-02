/**
 * Creates an object composed of keys generated from the results of running
 * each element of `collection` through `iteratee`.
 *
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function|string} iteratee The iteratee to transform keys.
 * @returns {Object} Returns the composed aggregate object.
 */
function countBy(collection, iteratee) {
    if (!collection) return {};

    const result = {};
    const func = typeof iteratee === 'function'
        ? iteratee
        : (item) => item[iteratee];

    const array = Array.isArray(collection) ? collection : Object.values(collection);

    for (const item of array) {
        const key = func(item);
        result[key] = (result[key] || 0) + 1;
    }

    return result;
}

module.exports = countBy;
