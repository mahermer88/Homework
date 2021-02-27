/**
 * Credit to https://adventofcode.com/ for this exercise
In the list below you have an array of numbers. The goal is to find the three numbers that add up to 2020.
Once you have found those numbers, multiply the numbers and store the result of that in the result variable.
 */

const list = [1721, 979, 366, 299, 675, 1456];
let result;

// Write your code here
/*const X = list.forEach((elementX) => {
  let A = 2020 - elementX;
  const Y = list.forEach((elementY) => {
    let elementZ = A - elementY;
    const Z = list.forEach((element) => {
      if (elementZ === element) return (result = elementX * elementY * element);
    });
  });
});*/
for (let i = 0; i < list.length && result === undefined; i++) {
  let numberX = list[i];
  let sumTwoNumbers = 2020 - numberX;

  for (let v = i; v < list.length && result === undefined; v++) {
    let numberY = list[v];
    let numberZ = sumTwoNumbers - numberY;

    for (let j = v; j < list.length && result === undefined; j++) {
      if (numberZ === list[j]) {
        result = numberX * numberY * numberZ;
      }
    }
  }
}
console.log(result);
// TEST CODE, do not change
console.assert(
  result === 241861950,
  `The result is not correct, it is ${result}, but should be 241861950`
);