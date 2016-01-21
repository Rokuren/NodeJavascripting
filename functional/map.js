function doubleAll(numbers) {
  // solution
  // numbers is an array of 0-20 integers between 0&9
  // use array map to double all values in the array
  // map returns an array. forEach operates on the original elements.
  var doubled = numbers.map(function(num) {
    return num * 2;
  });

  // return doubled array
  return doubled;
}

module.exports = doubleAll;
