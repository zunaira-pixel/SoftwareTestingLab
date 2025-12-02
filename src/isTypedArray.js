/**
 * Checks if `value` is classified as a typed array.
 *
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function isTypedArray(value) {
    const typedArrayTypes = [
        '[object Int8Array]',
        '[object Uint8Array]',
        '[object Uint8ClampedArray]',
        '[object Int16Array]',
        '[object Uint16Array]',
        '[object Int32Array]',
        '[object Uint32Array]',
        '[object Float32Array]',
        '[object Float64Array]',
        '[object BigInt64Array]',
        '[object BigUint64Array]'
    ];

    return typedArrayTypes.includes(Object.prototype.toString.call(value));
}

module.exports = isTypedArray;
