function checkUsersValid(goodUsers) {
  return function allUsersValid(submittedUsers) {
    // goodUsers a list of id's.
    // submittedUsers list of id's for validation

    return submittedUsers.every(function(subuser) { 
      return goodUsers.some(function(user) {
          return user.id === subuser.id;
      });
    });
  };
}

module.exports = checkUsersValid;
