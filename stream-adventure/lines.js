var split = require('split');
var through2 = require('through2');

var lineCounter = 1;

process.stdin.pipe(split()).pipe(through2(function (line, _, next) {
    
  if(lineCounter % 2 === 0) {
    this.push(line.toString().toUpperCase() + '\n');
  } else {
    this.push(line.toString().toLowerCase() + '\n');
  }

    lineCounter++;
    next();
  })).pipe(process.stdout); 
