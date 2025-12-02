/**
 * Casts `value` as an array if it's not one.
 *
 * @param {*} value The value to cast.
 * @returns {Array} Returns the cast array.
 */
function castArray(...args) {
    if (args.length === 0) {
        return [];
    }
    const value = args[0];
    return Array.isArray(value) ? value : [value];
}

module.exports = castArray;
