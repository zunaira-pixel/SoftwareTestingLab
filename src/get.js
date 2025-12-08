/**
 * Gets the value at `path` of `object`.
 *
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 */
function get(object, path, defaultValue) {
    if (!object) return defaultValue;

    const pathArray = Array.isArray(path)
        ? path
        : String(path).replace(/\[(\d+)\]/g, '.$1').split('.');

    let result = object;

    for (const key of pathArray) {
        result = result?.[key];
        if (result === undefined) {
            return defaultValue;
        }
    }

    return result;
}

module.exports = get;
