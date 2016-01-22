/*
 * input: an arbitrary Array of any type.
 * operation: an arbitrary function which can be applied to items in input
 *
 * implement map which applies a function to each item in an array using reduce
 * reduce: (prev, current, array, index) where prev can be initially supplied
 *   and then is the value left by return
 */

function arrayMap(arr, fn) {
  // I need to return a new array
  return arr.reduce(function(prev, curr, arr, index) {
    // prev =
    prev.push(fn(curr)); 
    // ^ can't directly return this line. push returns new length

    return prev;
  }, []);
}

module.exports = arrayMap;
