const userList = [
  {
    name: 'Alfalfa',
    password: 'string',
    isAdmin: false
  }
]

module.exports = {
  userList: userList,
  addUser: addUser,
  removeUser: removeUser
};

//Function to add a user to the user list
function addUser(name, isAdmin, password) {
  //Verify that all required fields are present
  if (!name || !isAdmin || !password) {
    //There is missing field(s) in the AuthenticationRequest or it is formed improperly.
    return -1;
  }

  
  //Verify that the password meets the requirements
  if (!isValidPassword(password)) {
    //The user or password is invalid.
    return -2;
  }
  
  //Add the user to the user list
  userList.push({ name, isAdmin, password });
  return 1;
}

//Function to remove a user from the user list
function removeUser(name) {
  //Find the index of the user in the user list
  const index = userList.findIndex(user => user.name === name);
  
  //If the user is not found, throw an error
  if (index === -1) {
    throw new Error('The user or password is invalid.');
  }
  
  //Remove the user from the user list
  userList.splice(index, 1);
}

/**
 * Helper function to validate the password
 **/
function isValidPassword(password) {
  // Password must be at least 8 characters long
  if (password.length < 8) {
    return false;
  }

  // Password must contain at least one uppercase letter, one lowercase letter,
  // one digit, and one special character
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_\-+=[\]{};':"\\|,.<>/?]).{8,}$/;
  if (!regex.test(password)) {
    return false;
  }

  // Password must not contain any SQL injection or malicious code
  const maliciousRegex = /(;|')DROP TABLE|(<|>)(\s)*script/gi;
  if (maliciousRegex.test(password)) {
    return false;
  }

  return true;
}