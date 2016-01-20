var duplexer = require('duplexer2'); // writable, readable streams
var through = require('through2'); //stream from function

module.exports = function(counter) {
  // track the number of occurences of each unique country code
  // object to track the number of occurrences of each unique country code
  var countryCount= {}; // {"US": 2, "GB": 3, "CN": 1}
  console.log("Enter");
  // object stream
  // counter = readable, stream);
  // took forever to find writableObjectMode:true
  var duplex = duplexer({writableObjectMode:true},through.obj(function(country, _, next) {
    // object stream, reads object instead of line of text?
    console.log(country); 
   if(countryCount.hasOwnProperty(country.country)) {
      //exists
      countryCount[country.country] += 1;
    } else {
      //first occurence
      countryCount[country.country] = 1;
    }

    next();
  }) , counter);


   duplex.on("finish", function () {
     counter.setCounts(countryCount);
   });

  return duplex;
}; 
