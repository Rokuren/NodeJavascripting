var http = require('http');
var bl = require('bl');
// three URLs, need to print output in order 
var array = [];
// count callbacks
// checking array outside of the functions doesn't see data. scope
var callbacks = 0;
function get(i) {
  http.get(process.argv[2 + i], function callback(response) {
    // response is a Node Stream object
    // response.setEncoding("utf8");
    response.pipe(bl(function(err, data) {
      var str = data.toString();
    
      array[i] = str;  
      callbacks++;
      
      // this will only hit until after the last callback
      if(callbacks == 3) {
        for(var j = 0; j < 3; j++) {
           console.log(array[j]);
        }
      }
    }));

  });
}

for(var i = 0; i < 3; i++) {
  get(i);
}
