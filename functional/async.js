/*
 * userIds: array of numberic user ids
 * load: a function used to load user objects. expects an id and a callback
 *  callback will be called with the result of loading the specified id. 
 *  object or null
 * done: a function that expects an arry of user objects.
 */

function loadUsers(userIds, load, done) {
 var users = [];
 var count = 1;
 
 for(var i = 0; i < userIds.length; i++) {
  users.push(load(userIds[i]));
 }
 // official: second parameter for function. index after id
 userIds.forEach(function(id) {
   load(id, function(obj) {
     users.push(obj);
     // ++count increment before comparison. allows count initialized to 0.
     if(count === userIds.length) {
      done(users);
     } else {
      count++;
     }
   });
 });
 return users;
}

module.exports = loadUsers;
