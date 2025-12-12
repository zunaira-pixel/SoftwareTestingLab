/**
 * Checks if `string` ends with the given target string.
 *
 * @param {string} string The string to inspect.
 * @param {string} target The string to search for.
 * @param {number} [position=string.length] The position to search up to.
 * @returns {boolean} Returns `true` if `string` ends with `target`, else `false`.
 */
function endsWith(string, target, position) {
    if (!string) return false;

    const length = position === undefined ? string.length : position;
    const end = length;
    const start = end - target.length;

    return start >= 0 && string.slice(start, end) === target;
}

module.exports = endsWith;
