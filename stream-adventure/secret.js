var crypto = require('crypto');
var zlib = require('zlib');
var tar = require('tar');
var through = require('through2');
/*
encrypted, gzipped tar on process.stdin
decrypt and unzip
for each file in the tar print: md5hash filename\n

*/

// protocol, password
var crypt = crypto.createDecipher(process.argv[2], process.argv[3]);
var gzip = zlib.createGunzip(); // stream for gunzipping
var parser = tar.Parse(); //writable stream,  will emit entry events

process.stdin.pipe(crypt).pipe(gzip).pipe(parser);

parser.on('entry', function(entry) {
  //iconsole.log(entry.type);
  //console.log(entry.path);

  if(entry.type === 'File') {
    var hash = crypto.createHash('md5', {encoding: 'hex' });
    entry.pipe(hash).pipe(through(function(hash) {
       var md5 = hash.toString();
       //console.log adds \n
       console.log(md5 + ' ' + entry.path);
    }));
  }
});



