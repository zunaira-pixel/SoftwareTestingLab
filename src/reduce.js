/**
 * Reduces collection to a value which is the accumulated result of running
 * each element in collection through iteratee.
 *
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {*} accumulator The initial value.
 * @returns {*} Returns the accumulated value.
 */
function reduce(collection, iteratee, accumulator) {
    if (!collection) return accumulator;

    const array = Array.isArray(collection) ? collection : Object.values(collection);
    let hasInitialValue = arguments.length >= 3;
    let index = 0;

    if (!hasInitialValue) {
        accumulator = array[0];
        index = 1;
    }

    for (; index < array.length; index++) {
        accumulator = iteratee(accumulator, array[index], index, array);
    }

    return accumulator;
}

module.exports = reduce;
