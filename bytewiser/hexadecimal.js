/*
 * given an unknown number of bytes passed via process.argv
 */
// take all the bytes ignore first two args
var bytes = process.argv.slice(1, process.argv.length);

// create new buffer from bytes;
var buffer = new Buffer(bytes);
// 'hex' encode each byte as two hexadecimal characters
// I had leading zeroes pair; toString([encoding], [start], [end]);
//  looks like official sliced at 2 and mapped to 'Number';
console.log(buffer.toString('hex', 1));
