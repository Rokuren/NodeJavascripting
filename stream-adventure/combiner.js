var combine = require('stream-combiner');
var split = require('split');
var through = require('through2');
var zlib = require('zlib');
//build in zlib support

module.exports = function() {
 // where do I get the the list. that happens after I return the combine.
 // so my combine options are a through(function) that reads the data,
 //combine returns a stream that writes to the first stream and
 // reads from the last stream.
 // through function, split, gzip
 // each one feeds into the next. so split then read, then zip?
 var comb = combine(split(), sorter(), zlib.createGzip() );

 return comb; 
};


function sorter () {
  var shelf = [];
  var genre;
  var genrecount = 0;
  return through( function(input, _, next) {
    if(input.length === 0) return next();
    var  book = JSON.parse(input);
    
    //assumption input is correct.
    if(book.type === 'genre') {
      if(genre) {
        //runs after first genre is complete
        this.push(JSON.stringify(genre) + '\n');
      }
      genre = { name: book.name, books: [] };
      
      //this.push(JSON.stringify(genre));
      //shelf.push(genre);
    } else if(book.type === 'book') {
      genre['books'].push(book.name);
    }

    next();
  }, function (next) {
     // pushes last book
     this.push(JSON.stringify(genre) + '\n');
    //console.log("END: " + shelf);
    next();
  });
}
