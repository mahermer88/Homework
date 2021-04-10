'use strict';
/*------------------------------------------------------------------------------
1. Complete the function `rollTheDices()` by using `Promise.race()`.
2. Refactor the function `main()` using async/await and try/catch.
3. Once you got this working, you may observe that some dices continue rolling 
   for some undetermined time after the promise returned by `Promise.race()` 
   resolves. Do you know why? Add your answer as a comment to the bottom of the 
   file.
------------------------------------------------------------------------------*/
// ! Do not remove this line
const rollDice = require('../../helpers/pokerDiceRoller');

function rollTheDices() {
  const dices = [1, 2, 3, 4, 5];
  const oneThrow = dices.map((dice) => rollDice(dice));
  return Promise.race(oneThrow);
}

// Refactor this function to use async/await and try/catch
async function main() {
  try {
    const results = await rollTheDices();
    console.log('Resolved!', results);
  } catch (error) {
    console.log('Rejected!', error.message);
  }
}

main();
/* As we discussed the last Sunday, a promise allows us to monitor the outcome of a process, without any influence on this process itself.
- In the case of using Promise.race, it needs only one settled promise to make the whole task (array of promises) settled, 
even though other promises could be not finished yet and they could continue pending.*/
// ! Do not change or remove the code below
module.exports = rollTheDices;
