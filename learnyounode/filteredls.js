var fs = require('fs');
var path = require('path');

// process.argv[2] => directory
// process.argv[3] => extension sans .
var filtered = undefined;
var total = 0;
var ext = '.' + process.argv[3];
function async() {
  fs.readdir(process.argv[2], function asyncDone(err, dirContents) {
    // dirContents is a list of filenames
    filtered = dirContents.filter(function(file) {
      return path.extname(file) === ext;
    });

    for(var i = 0; i < filtered.length; i++) {
       console.log(filtered[i]);
    }
  });
}

async();
