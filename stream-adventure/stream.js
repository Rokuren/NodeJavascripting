var trumpet = require('trumpet');
var through = require('through2');

var tr = trumpet();

var stream = tr.select('.loud').createStream();

// https://github.com/nodeschool/discussions/issues/346
// stream and tr are connected. piping the results of stream back into 
//   stream signals that it should be sent back to trumpet
stream.pipe(through(function (buffer, _, next) {
  this.push(buffer.toString().toUpperCase());
  next();
})).pipe(stream);

// make sense to pipe stdin to trumpet as it has to select for loud.
//  the stream then put's it to upper case and sends it back to trumpet 
process.stdin.pipe(tr).pipe(process.stdout);
