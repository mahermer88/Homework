'use strict';
/*------------------------------------------------------------------------------
1. Run the exercise as given and observe that it works as advertised. Note that 
   the dice must be rolled an unpredictable number of times until we get an ACE 
   (eventually, we will).
2. Now, rewrite the body of the `rollDiceUntil()` function using async/await. 
   Hint: a `while` loop may come handy.
3. Refactor the function `main()` to use async/await and try/catch.
------------------------------------------------------------------------------*/
// ! Do not change or remove the next two lines
const rollDice = require('../../helpers/pokerDiceRoller');

async function rollDiceUntil(wantedValue) {
  let value;
  while (value !== wantedValue) {
    value = await rollDice();
  }
  return value;
}

async function main() {
  try {
    const results = await rollDiceUntil('ACE');
    console.log('Resolved!', results);
  } catch (error) {
    console.log('Rejected!', error.message);
  }
}

main();

// ! Do not change or remove the code below
module.exports = rollDiceUntil;
