var slice = Array.prototype.slice;

function logger(namespace) {

  return function partial() {
     // arguments looks like 
     //console.log(arguments);

     //console.log('\n');
     var arr = slice.apply(arguments).join(" ");
     console.log(namespace, arr);
  };
}

module.exports = logger;
