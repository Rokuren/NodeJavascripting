var http = require('http');
var url = require('url');

// wait for request
var server = http.createServer(function callback (request, response) {
  // request has information from sender
  var parsed = url.parse(request.url, true);
  var jsonresponse = undefined;
   
  console.log(parsed);
  // api/parsetime
  if(parsed.pathname === '/api/parsetime') {
    //var time = parsed.query.iso.substring(11, 19);
    var date = new Date(Date.parse(parsed.query.iso));   
    jsonresponse = {
      "hour": date.getHours(),
      "minute": date.getMinutes(),
      "second": date.getSeconds()
    };
    
  } else if(parsed.pathname === '/api/unixtime') {
    // api/unixtime
    var date = Date.parse(parsed.query.iso);

    jsonresponse = {
      "unixtime": date
    }; 
  }

  if(jsonresponse != undefined) {
    response.writeHead(200, { 'Content-Type': 'application/json'});
    response.end(JSON.stringify(jsonresponse));
  }
});

server.listen(process.argv[2]);
