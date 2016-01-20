var fs = require('fs');
var path = require('path');
var mymodule = require('./modulefilter.js');
// process.argv[2] => directory
// process.argv[3] => extension sans .
var filtered = undefined;
var total = 0;
var ext = '.' + process.argv[3];


mymodule(process.argv[2], process.argv[3], function(err, filtered) {
  if(err) {
    console.log("error");
  } else {
    filtered.forEach(function(file) {
      console.log(file);
    });
  }

});
