var http = require('http');

http.get(process.argv[2], function callback(response) {
  // response is a Node Stream object
  response.setEncoding("utf8");
  response.on("data", function(data) {
    // data is a string
    console.log(data);
  });
});
