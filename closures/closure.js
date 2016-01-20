function foo() {
  var bar = false;
  quux = 3;
  function zip() { 
    var quux = 5;
    bar = true;
  }
  // as a named function it can be returned as a variable
  return zip;
}
