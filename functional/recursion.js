/*
 * Just a version no dependencies return nothing.
 * Otherwise add each dpendency@version into an array as a string
 * Check for matching matching dependency@version
 */
// don't use any for or while loops
function getDependencies(tree) {
  // cannont convert undefined or null to object
 if(tree && tree.hasOwnProperty('dependencies')) {
   // start recursion
   var array = [];
   recurse(tree.dependencies);
 } else { 
  return [];
 }

 //console.log(array);
 // return an array each step
 function recurse(obj) {
  // this should get a dependencies object
  var keys = Object.keys(obj);
  // condition said no for/while loops but you have to for dependencies
  keys.forEach(function(key) {
   // on each key you need to recurse
   array.push(key+"@"+obj[key].version);
   if(obj[key].hasOwnProperty('dependencies')) {
    recurse(obj[key].dependencies);
   } else {
    return;
   }
 });
}
 // sort 
 array.sort();

 var unique = array.filter(function(dependency, index, array) {
  // indexOf returns first instance. so duplicate will not return current index
  return array.indexOf(dependency) === index;
 });
 return unique;
}

module.exports = getDependencies;
