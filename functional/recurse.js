/*
 * arr: an array to reduce over
 * fn: function to use as the reduction step
 *   fn(prev,curr)
 * init: inital value of the reduction; assume supplied; empty object
 */
function reduce(arr, fn, initial) {
  // array.shift() removes and returns first value in array
  // is it because I destroy the array?
  return function recurseReduce(index, obj) {
    if(index >= arr.length) {
      return obj;
    } else {
      var curr = arr[index];
      index++;

      obj = fn(obj, curr);

      return recurseReduce(index, obj);
    }
  }(0, initial);
/* original solution; failed because it destroyed arr. which was apparently 
   kept and used for showing input and submitting to the verifier. kind of 
   annoying really.
  if(arr.length) {
    //array empty
    var curr = arr[index];
    index++;
    initial = fn(initial, curr);
    return reduce(arr, fn, initial); 
  } else {
    return initial;
  } */
  //console.log("arr: " + arr);
  //console.log("fn: " + fn);
  //console.log("initial: " + initial);
}

module.exports = reduce;
