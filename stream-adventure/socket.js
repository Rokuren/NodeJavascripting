var ws = require('websocket-stream');
var stream = ws('ws://localhost:8099');

// test-client.js
stream.write("hello\n");
