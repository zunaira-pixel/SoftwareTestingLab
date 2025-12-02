/**
 * Converts `value` to a finite number.
 *
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted number.
 */
function toFinite(value) {
    if (!value) {
        return value === 0 ? value : 0;
    }

    value = Number(value);

    if (value === Infinity || value === -Infinity) {
        const sign = (value < 0 ? -1 : 1);
        return sign * Number.MAX_VALUE;
    }

    return value === value ? value : 0;
}

module.exports = toFinite;
