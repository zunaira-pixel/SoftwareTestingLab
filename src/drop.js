/**
 * Creates a slice of `array` with `n` elements dropped from the beginning.
 *
 * @param {Array} array The array to query.
 * @param {number} [n=1] The number of elements to drop.
 * @returns {Array} Returns the slice of `array`.
 */
function drop(array, n = 1) {
    if (!Array.isArray(array) || array.length === 0) {
        return [];
    }

    return array.slice(n);
}

module.exports = drop;
