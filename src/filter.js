/**
 * Iterates over elements of `collection`, returning an array of all elements
 * `predicate` returns truthy for.
 *
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function filter(collection, predicate) {
    if (!collection) return [];

    const result = [];
    const array = Array.isArray(collection) ? collection : Object.values(collection);

    for (const item of array) {
        if (predicate(item)) {
            result.push(item);
        }
    }

    return result;
}

module.exports = filter;
