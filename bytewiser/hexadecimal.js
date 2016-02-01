/*
 * given an unknown number of bytes passed via process.argv
 */
// take all the bytes ignore first two args
var bytes = process.argv.slice(2, process.argv.length);
// create new buffer from bytes;
var buffer = new Buffer(bytes);
// 'hex' encode each byte as two hexadecimal characters
// I had leading zeroes pair; toString([encoding], [start], [end]);
//  looks like official sliced at 2 and mapped to 'Number';
//  how did I not notice the bytes had more than necessary.
//  I even printed it out first.
console.log(buffer.toString('hex')); // changed from buffer.toString('hex',1);
