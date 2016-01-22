/*
 * target: an object containing the method 'method'
 * method: a string with the name of the method on target to spy on
 */

function Spy(target, method) {
  // overwrite the target.method but add a counter
  // since spy.count I need to return an object
  var spy = { count: 0 };

  var original = target[method];
  // replace method with same function except it calls count
  target[method] = function () {
    spy.count++;
    // apply used for array like inputs.
    // Check you are passing ALL the arguments! Hint: Function#apply
    return original.apply(this, arguments); // call the original method to this function with arguments
  }

  return spy;
}
module.exports = Spy;
