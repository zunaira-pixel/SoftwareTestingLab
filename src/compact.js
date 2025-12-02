/**
 * Creates an array with all falsey values removed.
 *
 * @param {Array} array The array to compact.
 * @returns {Array} Returns the new array of filtered values.
 */
function compact(array) {
    if (!Array.isArray(array)) {
        return [];
    }

    return array.filter(Boolean);
}

module.exports = compact;
