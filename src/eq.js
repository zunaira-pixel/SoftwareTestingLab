/**
 * Performs a SameValueZero comparison between two values.
 *
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */
function eq(value, other) {
    return value === other || (value !== value && other !== other);
}

module.exports = eq;
