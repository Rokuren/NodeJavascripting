module.exports = scenario;

function scenario(log, cb) {
 function start() {
  process.nextTick(thing);
 }

 var value = 97;
 log.info({value: value}, "scenario");
 function foo() {
  value *= 13;
  log.info({value: value}, "foo");
  // should be 2964
  cb(value);
 }

 start();

 function racer() {
  // bitwise and
  value &= 255;
  log.info({value: value}, "racer");
  setTimeout(foo, 0);
 }
 log.error("scenario: value changed to 213"); 
 //value = 213;
 log.info({value: value}, "scenario");
 function thing() {
  value += 131;
  log.info({value: value}, "thing");
  process.nextTick(racer);
 }
}
