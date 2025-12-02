/**
 * Creates an array of array values not included in the other given arrays.
 *
 * @param {Array} array The array to inspect.
 * @param {...Array} values The values to exclude.
 * @returns {Array} Returns the new array of filtered values.
 */
function difference(array, ...values) {
    if (!Array.isArray(array)) {
        return [];
    }

    const excludeSet = new Set(values.flat());
    return array.filter(item => !excludeSet.has(item));
}

module.exports = difference;
