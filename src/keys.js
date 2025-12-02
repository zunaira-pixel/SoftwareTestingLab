/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function keys(object) {
    return object == null ? [] : Object.keys(Object(object));
}

module.exports = keys;
