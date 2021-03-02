'use strict';

/*------------------------------------------------------------------------------
1. Inside the `index.js`, complete the `addCurrentTime` to add the current time 
  to the webpage. Make sure it's written in the HH:MM:SS notation (hour, minute,
  second). Use `setInterval()` to make sure the time stays current.
2. Have the function execute when it's loading in the browser.
------------------------------------------------------------------------------*/
function addCurrentTime() {
  // TODO complete this function
  //Use `setInterval()` to make sure the time stays current.
  setInterval(function () {
    //Make sure it's written in the HH:MM:SS notation (hour, minute,second)
    const currentDate = new Date();
    const time = currentDate.toLocaleTimeString();
    // document.body.innerHTML = time;
    document.body.innerText = time;
  }, 1000);
}

// TODO execute `addCurrentTime` when the browser has completed loading the page
window.addEventListener('DOMContentLoaded', addCurrentTime());
