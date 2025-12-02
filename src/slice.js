/**
 * Creates a slice of `array` from `start` up to, but not including, `end`.
 *
 * @param {Array} array The array to slice.
 * @param {number} [start=0] The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the slice of `array`.
 */
function slice(array, start = 0, end) {
    if (!Array.isArray(array)) {
        return [];
    }

    return array.slice(start, end);
}

module.exports = slice;
