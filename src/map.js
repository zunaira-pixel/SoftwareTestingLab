/**
 * Creates an array of values by running each element in collection through iteratee.
 *
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function map(collection, iteratee) {
    if (!collection) return [];

    const array = Array.isArray(collection) ? collection : Object.values(collection);
    return array.map(iteratee);
}

module.exports = map;
