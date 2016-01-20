var http = require('http');
var fs = require('fs');
// second cmd line is file loc
var server = http.createServer(function callback (request, response) {
  // request has information from sender

  // response is what I use to give back

  // all get the same file back
  var read = fs.createReadStream(process.argv[3]);
  
  read.pipe(response);
});

server.listen(process.argv[2]);
