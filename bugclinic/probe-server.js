/*
 * argh, how many challenges am I going to initially fail for leaving a 
 *  process running. silly jstrace still going.
 */

var createServer = require("http").createServer;
var trace = require("jstrace");

var server = createServer(function (req, res) {
 // the object {} below will become trace in probe-watcher request:start
 trace('request:start', { url: req.url});
 var statusCode = 0;
 var end = "";
 if(req.method === 'GET' && req.url === "/prognosis") {
  statusCode = 200;
  end = {ok:true};

 } else {
  statusCode = 404;
  end = {error:"notfound"};
  console.error("up");
 }
 res.writeHead(statusCode);
 res.end(JSON.stringify(end));
 // watcher wants statusCode on end
 trace('request:end', { statusCode: statusCode });
});
server.listen(9999, function () {
 console.error("up");
});

