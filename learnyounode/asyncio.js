var fs = require('fs');

var str = undefined;
var total = 0;

function async(callback) {
  fs.readFile(process.argv[2], function doneReading(err, fileContents) {
    str = fileContents.toString();
    callback();
  });
}

function countNewlines() {
  for(var i = 0; i < str.length; i++) {
    if(str[i] === "\n") {
      total += 1;
    }
  }

  console.log(total);
}

async(countNewlines);
