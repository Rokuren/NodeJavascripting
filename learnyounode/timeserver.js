var net = require('net');

// apparently ternary is exactly the same as java
function pad(number) {
  if(number < 10) {
    return "0" + number;
  } else {
    return number;
  }
}

var server = net.createServer(function (socket) {
  var date = new Date();
  var year = date.getFullYear();
  var month = date.getMonth() + 1; //starts at 0
  var day = date.getDate();  
  var hours = date.getHours();
  var min = date.getMinutes();
  
  month = pad(month);
  day = pad(day);
  hours = pad(hours);
  min = pad(min);
  
  var time = year + "-" + month + "-" + day + " " + hours + ":" + min;
  

  socket.end(time + '\n');
});

server.listen(process.argv[2]);
