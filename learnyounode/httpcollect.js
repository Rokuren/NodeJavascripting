var http = require('http');
var bl = require('bl');

http.get(process.argv[2], function callback(response) {
  // response is a Node Stream object
  // response.setEncoding("utf8");
  response.pipe(bl(function(err, data) {
    var str = data.toString();
    console.log(str.length);
    console.log(str);
  }));

});
