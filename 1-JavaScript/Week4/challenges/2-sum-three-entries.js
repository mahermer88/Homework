/**
 * Credit to https://adventofcode.com/ for this exercise
In the list below you have an array of numbers. The goal is to find the three numbers that add up to 2020.
Once you have found those numbers, multiply the numbers and store the result of that in the result variable.
 */


const list = [1721, 979, 366, 299, 675, 1456];
let result;
    
// Write your code here
const a = list.forEach((elementA) => {
    let d = 2020 - elementA
    const b = list.forEach((elementB) => {
     let c = d - elementB 
        for (let x = 0; x< list.length; x++) {
           if (c === list[x]) {
                return   result = elementA * elementB * c;
            }
        }        
    });  
});

// TEST CODE, do not change
console.assert(result === 241861950, `The result is not correct, it is ${result}, but should be 241861950`);