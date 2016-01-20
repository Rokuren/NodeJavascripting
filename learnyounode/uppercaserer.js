var http = require('http');
var fs = require('fs');
var map = require('through2-map');

// second cmd line is file loc
var server = http.createServer(function callback (request, response) {
  // request has information from sender
  request.pipe(map(function(chunk) {
    return chunk.toString().toUpperCase();
  })).pipe(response);
});

server.listen(process.argv[2]);
