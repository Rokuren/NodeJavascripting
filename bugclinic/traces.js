require('stackup');
var domain = require("domain");
var readFile = require("fs").readFile;
//var trycatch = require("trycatch");
module.exports = scenario;

function scenario(jsonPath, cb) {
 var d = domain.create();

 d.on("error", cb);
 /*
 // I think I tried to use this correctly, but I'm not sure what d.on returned
 //  the example of domain was literally all it was and it worked.
 //  come back at a later time. 
 trycatch(function() {
  readFile(jsonPath, {encoding: "utf8"}, function(error, contents) {
   cb(error, JSON.parse(contents));
  });
 }, function(err) {
  cb(err);
 });*/
 d.run(function() {
  readFile(jsonPath, {encoding: "utf8"}, function(error, contents) {
   cb(error, JSON.parse(contents));
  });
 });

}
