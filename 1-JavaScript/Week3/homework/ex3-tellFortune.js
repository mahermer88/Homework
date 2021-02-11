'use strict';
/*------------------------------------------------------------------------------
Why pay a fortune teller when you can just program your fortune yourself?

1. Create four arrays, `numKids`, `partnerNames`, `locations` and `jobTitles`. 
   Give each array five random string values that have to do with the name of 
   the variable.

2. Complete the function `selectRandomly`. This function should take an array 
   as a parameter and return a randomly selected element as its return value.

3. Complete the function named `tellFortune` as follows:

   - It should take four arguments: number of children (`number`), partner's 
     name (`string`), geographic location (`string`) and job title (`string`).
   - It should use the `selectRandomly` function to randomly select values from 
     the arrays.
   - It should return a string: "You will be a `jobTitle` in `location`, 
    married to `partnerName` with `numKids`."

4. Call the function three times, passing the arrays as arguments. Use `
   console.log` to display the results.

Note: The DRY is put into practice here: instead of repeating the code to 
randomly select array elements four times inside the `tellFortune` function 
body, this code is now written once only in a separated function.
-----------------------------------------------------------------------------*/
const numKids = [// TODO add elements here
  "1", "10", "25", "50", "100"];

const partnerNames = [ // TODO add elements here
  "snowWhite", "cinderella", "mulan", "moana", "pocahontas"];

const locations = [ // TODO add elements here
  "moon", "venus", "mars", "pluto", "neptune"];

const jobTitles = [ // TODO add elements here
  "morganFreeman", "newMessi", "Batman", "theGodFather", "Tarzan"];

// This function should take an array as its parameter and return
// a randomly selected element as its return value.
function selectRandomly(array) {  // TODO complete this function
  return (array[Math.floor(Math.random() * array.length)])
}

function tellFortune(children, partner, location, job) { // TODO complete this function
return (`You will be a ${selectRandomly(job)} in ${selectRandomly(location)}, married to ${selectRandomly(partner)} with ${selectRandomly(children)} kids.`)
}

console.log(tellFortune(numKids, partnerNames, locations, jobTitles));
console.log(tellFortune(numKids, partnerNames, locations, jobTitles));
console.log(tellFortune(numKids, partnerNames, locations, jobTitles));

// ! Do not change or remove the code below
module.exports = tellFortune;
