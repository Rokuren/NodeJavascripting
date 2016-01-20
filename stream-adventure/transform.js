var through = require('through2');

function write(buffer, encoding, next) {
  //this.push('I got some data: ' + buffer + '\n');
  
  // to uppercase here
  var tr = buffer.toString().toUpperCase();
  this.push(tr);
  //console.log(tr);
  //process.stdin.pipe(tr).pipe(process.stdout);
  next();
}

function end(done) {
  done();
}

var stream = through(write, end);

process.stdin.pipe(stream).pipe(process.stdout); 
