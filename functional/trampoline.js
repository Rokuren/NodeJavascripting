/*
 * can assume that operation has no arguments or are bound. return not important
 * repeat can't have any loops.
 * repeat returns next step
 */
// official solution wrapped entirety of the inside of repeat
function repeat(operation, num) {
 // modify this so it doesn't cause a stack overflow
 if(num <= 0) {
  return; // not function
 }
 operation();
 // function
 return function() {
  repeat(operation, --num);
 };
}

function trampoline(fn) {
  // implement a trampoline
  //  can use a loop here
  while(typeof fn === 'function') {
   fn = fn();
  }
}

module.exports = function(operation, num) {
  // trampoline here; official did trampoline(function () { around the return
  return trampoline(repeat(operation, num));
}
