/**
 * Credit to https://adventofcode.com/ for this exercise
In the list below you have an array of numbers. 
The goal is to find the two numbers that add up to 2020.
Once you have found those numbers, multiply the numbers 
and store the result of that in the result variable.
 */

const list = [1721, 979, 366, 299, 675, 1456];
let result;

// Write your code here
for (let i = 0; i < list.length && result === undefined; i++) {
  let a = list[i];
  let b = 2020 - a;
  for (let v = i; v < list.length && result === undefined; v++) {
    if (b === list[v]) {
      result = a * b;
    }
  }
}
console.log(result);
/*  
const a = list.forEach((element) => {
  let b = 2020 - element
  for (let v = 0; v< list.length; v++) {
    if (b === list[v]) {
    return   result = element * b;
    }
  }  
});*/

// TEST CODE, do not change
console.assert(
  result === 514579,
  `The result is not correct, it is ${result}, but should be 514579`
);
