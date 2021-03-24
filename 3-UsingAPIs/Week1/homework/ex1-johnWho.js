'use strict';
/*------------------------------------------------------------------------------
Rewrite this function, but replace the callback syntax with the Promise syntax:
- Have the `getAnonName` function return a `new Promise`.
- If the Promise `resolves`, pass the full name as an argument to resolve with.
- If the Promise `rejects`, pass an error as the argument to reject with: "You 
  didn't pass in a first name!"
------------------------------------------------------------------------------*/
// TODO see above
/*const getAnonName = (firstName, callback) => {
  setTimeout(() => {
    if (!firstName) {
      callback(new Error("You didn't pass in a first name!"));
      return;
    }
    const fullName = `${firstName} Doe`;
    callback(fullName);
  }, 1000);
};*/
const getAnonName = (firstName) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (firstName) {
        const fullName = `${firstName} Doe`;
        resolve(fullName);
      } else {
        reject(new Error("You didn't pass in a first name!"));
      }
    }, 1000);
  });
};
getAnonName('John')
  .then((response) => console.log(response))
  .catch((error) => console.log(error));

// ! Do not change or remove the code below
module.exports = getAnonName;
