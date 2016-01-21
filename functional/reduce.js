function countWords(inputWords) {
  // inputWords array of random strings
  var obj = {};
  // reduce(function(previousValue, currentValue, currentIndex, array))
  // intial call no options: prev = [0], curr = [1]
  //  afterwards prev = return of last iteration
  var ret = inputWords.reduce(function(prev, current, index, array) {
    //console.log(prev + " index: " + index + " current: " + current);
    if(current in prev) {
      // should check to see if string has been added to object
      prev[current]++;
    } else {
      // increase count
      prev[current] = 1;
    }

    return prev;   
  }, {}); // inital prev is an empty object

  return ret;
  // return an object with counts for each of the words
}

module.exports = countWords;
