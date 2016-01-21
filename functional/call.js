function duckCount() {
  //okay so apparently every function has an arguments var[
  var count = Array.prototype.filter.call(arguments, (function(arg) {
     return Object.prototype.hasOwnProperty.call(arg, 'quack');
  }));

  return count.length;
}

module.exports = duckCount;
