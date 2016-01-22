function repeat(operation, num) {
  // modify this so it can be interrupted;
  if(num <= 0) {
    return;
  }
  operation();
  //console.log(num);
  //return repeat(operation, --num);
  //setTimeout(repeat(operation, --num), 1); // this didn't work at all
  // recommended to use setTimeout(func, delay) instead of code
  setTimeout(function () {
    repeat(operation, --num);
  }, 1);
} 

module.exports = repeat;
