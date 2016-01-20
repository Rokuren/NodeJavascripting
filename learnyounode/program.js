//console.log(process.argv);

var numbers = process.argv.filter(function(arg) {
  return (!isNaN(arg));
});

//console.log(numbers);
var total = 0;
for(var i = 0; i < numbers.length; i++) {
  total += Number(numbers[i]);
}

console.log(total);
