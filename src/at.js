/**
 * Creates an array of elements from `array` at the specified indexes.
 *
 * @param {Array} array The array to query.
 * @param {...(number|number[])} indexes The indexes of elements to select.
 * @returns {Array} Returns the new array of selected elements.
 */
function at(array, ...indexes) {
    const result = [];
    const flatIndexes = indexes.flat();

    for (const index of flatIndexes) {
        const actualIndex = index < 0 ? array.length + index : index;
        if (actualIndex >= 0 && actualIndex < array.length) {
            result.push(array[actualIndex]);
        }
    }

    return result;
}

module.exports = at;
