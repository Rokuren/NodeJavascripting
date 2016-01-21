function higherOrder(operation, num) {

  var counter = 0;

  function recurse(operation) {
    if(counter >= num) {
      return;
    } else {
      counter++;
      operation();
      recurse(operation);
    }
  }
  
  recurse(operation);
}

module.exports = higherOrder;
