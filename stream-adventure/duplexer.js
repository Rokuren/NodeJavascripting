var duplexer = require('duplexer2');
var spawn = require('child_process').spawn;
// https://nodejs.org/api/child_process.html#child_process_child_process
module.exports = function(cmd, args) {
  // spawn the process and return a single stream 
  // joining together the stdin and stdout here.
  var command = spawn(cmd, args);
  
  var duplex = duplexer(command.stdin, command.stdout);

  return duplex;
} 

