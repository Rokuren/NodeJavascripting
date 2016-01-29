/*
 * Couldn't get repl-client to run couldnt find the repl folder.
 *  got it to verify anyway
 * replify: first argument should have the name: bug-clinic
 *  second argument should have .__message = "REPLs are neat"
 */

var http = require('http');
var replify = require('replify');

module.exports = scenario;

function scenario(callback) {
 var createServer = http.createServer;

 var server = createServer(function(request, response) {
  res.end("rawr random server");
 });
 // replify(options, app,[contexts]); app is primary context so the server.
 // options: name, path, extension, logger,s tart, app, contexts
 server.__message = "REPLs are neat"; // added to second argument
 var repl = replify({name: "bug-clinic"}, server);
 
 // listen on 8080 
 server.listen(8080, function() {
  // execute when hit
  callback(server, repl);
 });
}
