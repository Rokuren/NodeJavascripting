// scenario.js
var fs = require("fs");

var peach = function(obj) {
 // trace the message "traced"
 console.trace("traced"); //label
 // dump obj to stdout
 console.dir(obj);
};

var bowser = function(callback) {
  fs.readFile(process.argv[2], {encoding: "utf8"}, callback);
};

var koopa = function(error, file) {
 if(error) {
  console.error("it's an error");
 }
 peach(JSON.parse(file));
};

bowser(koopa);
