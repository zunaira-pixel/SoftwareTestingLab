/**
 * Checks `value` to determine whether a default value should be returned.
 * Returns the first non-null/undefined value.
 *
 * @param {*} value The value to check.
 * @param {...*} defaultValues The default values.
 * @returns {*} Returns the first defined value.
 */
function defaultToAny(value, ...defaultValues) {
    for (const val of [value, ...defaultValues]) {
        if (val != null && val === val) {
            return val;
        }
    }
    return undefined;
}

module.exports = defaultToAny;
