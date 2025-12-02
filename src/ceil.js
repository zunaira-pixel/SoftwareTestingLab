/**
 * Computes `number` rounded up to `precision`.
 *
 * @param {number} number The number to round up.
 * @param {number} [precision=0] The precision to round up to.
 * @returns {number} Returns the rounded up number.
 */
function ceil(number, precision = 0) {
    const multiplier = Math.pow(10, precision);
    return Math.ceil(number * multiplier) / multiplier;
}

module.exports = ceil;
