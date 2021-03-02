'use strict';
/*------------------------------------------------------------------------------
1. Using JavaScript, change the body tag's style so it has a font-family of 
   "Arial, sans-serif".
2. Using JavaScript, replace each of the spans (`nickname`, fav-food`, 
   `hometown`) with your own information.
3. In JavaScript, iterate through each `<li>` and change the class to 
   `list-item`.
------------------------------------------------------------------------------*/

// TODO add your JavaScript code here.
// making new variable , and change the style of font-family:
const body = document.querySelector('body');
body.style.fontFamily = 'Arial, sans-serif';

//Using JavaScript, replace each of the spans (`nickname`, fav-food`,`hometown`) with your own information:
/*const span = document.querySelectorAll('span');
span[0].innerText = 'Maher';
span.innerText = 'Apple';
span.innerText = 'syria';*/
const nickname = document.querySelector('#nickname');
nickname.innerText = 'Maher';
const favFood = document.querySelector('#fav-food');
favFood.innerText = 'greenApple';
const hometown = document.querySelector('#hometown');
hometown.innerText = 'Syria';

//In JavaScript, iterate through each `<li>` and change the class to `list-item`.
const listElements = document.querySelectorAll('li');
listElements.forEach((element) => {
  element.className = 'list-item';
});
