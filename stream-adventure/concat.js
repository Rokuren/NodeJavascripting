var concat = require('concat-stream');
var http = require('http');
/* concat example
var server = http.createServer(function(request, response) {
  if(request.method === 'POST') {
    request.pipe(concat(function (body) {
      var obj = JSON.parse(body);

      response.end(Object.keys(obj).join('\n');
    }));
  }
});

server.listen(5000);*/

process.stdin.pipe(concat(function (buffer) {
  //hits after stream is complete/concatenated
  var str = buffer.toString();
  var rev = "";

  for(var i = str.length - 1 ; i >= 0; i--) {
    rev += str[i];
  } 
  console.log(rev);
  //this.push(rev); not a stream?
}));
