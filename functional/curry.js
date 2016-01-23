/*
 * arity: function's expected number of arguments; checked by .length
 * fn: the function we want to curry;
 * n: (optional) number of arguments to curry;
 * fn.apply can take an array of arguments; tally arguments then apply
 */

function curryN(fn, n) {
 // no for/while or forEach
 // curry function for arbitrary number of elements
 if(isNaN(n)) {
  n = fn.length;
 }
 
 // has to return a function
 function curry(array) {
  return function(arg) {
   // return a function that recurses
   var combined = array.concat(arg); 
   // for some reason this doesn't work when counting with n and --;
   //  is it possible some of the functions take in multiple args at a time?
   if(combined.length < n) {
    return curry(combined);
   } else {
    return fn.apply(this, combined);
   }
  };
 }

 return curry([]);
}

module.exports = curryN;
