/*
 * The bind() method creates a new function that, when called, has its this
 * keyword set to the provided value, with a given sequence of arguments 
 * preceding any provided when the new function is called.
 */
// returns slice
// Array.prototype.slice.call(array, args...);
module.exports = Function.call.bind(Array.prototype.slice);
