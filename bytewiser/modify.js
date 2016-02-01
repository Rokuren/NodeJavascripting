/*
 * exchange all . (ASCII 46) for ! (ASCII 33);
 * I keep getting a socket description. is the process not getting the data it 
 *  needs? I need a callback?
 */
/*console.log(process.stdin);
var buffer = process.stdin;
for(var i = 0; i < buffer.length; i++) {
    if(buffer[i] === 46) {
     // buffers have a .write method
     buffer.write('!',i);
     // this never hits
     console.log("changes: " + i);
    }
}*/
//console.log(buffer);
process.stdin.on("data", function(buffer) {
 // console.log(buffer); // Yay I finally got a <Buffer ...>
 for(var i = 0; i < buffer.length; i++) {
  if(buffer[i] === 46) {
   buffer.write('!', i);
   // buffer[i] -= 13; // also, works; 46 - 13 = 33 => !
  }
 }

 console.log(buffer);
});

/*
 * Official solution uses '!'.charCodeAt(0);
 *  and then later does a direct assignment buff[i] = BANG;
 */
