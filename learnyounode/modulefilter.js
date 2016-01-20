var fs = require('fs');
var path = require('path');

module.exports = function (dirName, fileExt, callback) {
  var ext = "." + fileExt;

  fs.readdir(dirName, function asyncDone(err, dirContents) {
    if(err) {
      return callback(err);
    }

    // dirContents is a list of filenames
    filtered = dirContents.filter(function(file) {
      return path.extname(file) === ext;
    });

    return callback(null, filtered);
  });
}

