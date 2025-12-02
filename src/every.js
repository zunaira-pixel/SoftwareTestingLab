/**
 * Checks if `predicate` returns truthy for all elements of `collection`.
 *
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if all elements pass the predicate check, else `false`.
 */
function every(collection, predicate) {
    if (!collection) return true;

    const array = Array.isArray(collection) ? collection : Object.values(collection);

    for (const item of array) {
        if (!predicate(item)) {
            return false;
        }
    }

    return true;
}

module.exports = every;
