var crypto = require('crypto');

// protocol, password
process.stdin.pipe(crypto.createDecipher('aes256', process.argv[2])).pipe(process.stdout);
