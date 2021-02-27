'use strict';

/*------------------------------------------------------------------------------
1. Create a variable to store a reference to the `<img>` element.
2. Change the style of the `<img>` to have a `left` of `0px`, so that it starts 
   at the left hand of the screen.
3. Complete the function called catWalk() to move the cat 10 pixels to the right
   of where it started, by changing the `left` style property.
4. Call that function every 50 milliseconds. Your cat should now be moving 
   across the screen from left to right. Hurrah!
5. When the cat reaches the right-hand of the screen, restart them at the left 
   hand side (`0px`). So they should keep walking from left to right across the 
   screen, forever and ever.
6. When the cat reaches the middle of the screen, replace the img with an image 
   of a cat dancing (use this URL: https://tenor.com/StFI.gif), keep it dancing 
   for 5 seconds, and then replace the img with the original image and have it 
   continue the walk.
-----------------------------------------------------------------------------*/
// Create a variable to store a reference to the `<img>` element and style at the left hand of the screen:
const catBl = document.querySelector('img');
catBl.style.left = '0px';

function catWalk() {
  // TODO complete this function
  //move the cat 10 pixels to the right
  catBl.style.left = parseFloat(catBl.style.left) + 10 + 'px';
  //When the cat reaches the right-hand of the screen, restart them at the left hand side
  if (parseFloat(catBl.style.left) > window.innerWidth) {
    catBl.style.left = '0px';
  }
  //cat reaches the middle of the screen
  if (parseFloat(catBl.style.left) === window.innerWidth / 2) {
    //Stop the cat
    clearInterval(catMoving);
    //replace the img with an image of a cat dancing for 5s
    catBl.src =
      'https://media1.tenor.com/images/2de63e950fb254920054f9bd081e8157/tenor.gif?itemid=10561424';
    setTimeout(function () {
      catBl.src = 'http://www.anniemation.com/clip_art/images/cat-walk.gif';
      catMoving = setInterval(catWalk, 50);
    }, 5000);
  }
}

//Call that function every 50 milliseconds
let catMoving = setInterval(catWalk, 50);

// TODO execute `catWalk` when the browser has completed loading the page
window.addEventListener('DOMContentLoaded', catWalk());
