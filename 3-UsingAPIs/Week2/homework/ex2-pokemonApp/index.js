'use strict';
/*------------------------------------------------------------------------------
Complete the four functions provided in the starter `index.js` file:

`fetchData`: In the `fetchData` function, make use of `fetch` and its Promise 
  syntax in order to get the data from the public API. Errors (HTTP or network 
  errors) should be logged to the console.

`fetchAndPopulatePokemons`: Use `fetchData()` to load the pokemon data from the 
  public API and populates the `<select>` element in the DOM.
  
`fetchImage`: Use `fetchData()` to fetch the selected image and update the 
  `<img>` element in the DOM.

`main`: The `main` function orchestrates the other functions. The `main` 
  function should be executed when the window has finished loading.

Try and avoid using global variables. Instead, use function parameters and 
return values to pass data back and forth.
------------------------------------------------------------------------------*/
function fetchData(url) {
  return fetch(url).then((response) => {
    //control the network errors by the value of status
    if (response.status <= 200 && response.status >= 400) {
      console.log(`HTTP or network errors`);
    } else {
      return response.json();
    }
  });
}
/*------------------------------------------------------------------------------*/
function fetchAndPopulatePokemons(data) {
  //get the select list
  const select = document.querySelector('select');
  //Add the pokemons' names as options
  const namesArray = data.results;
  namesArray.forEach((element) => {
    const option = document.createElement('option');
    option.textContent = element.name;
    select.appendChild(option);
  });
  //get the selected option of the list and call the fetch image depending on it:
  select.onchange = () => {
    select.value = select[select.selectedIndex].textContent;
    select[select.selectedIndex].selected = 'true';
    fetchImage(select.value);
  };
}
/*------------------------------------------------------------------------------*/
async function fetchImage(name) {
  try {
    //make the image of selected pokemon
    const data = await fetchData(`https://pokeapi.co/api/v2/pokemon/${name}`);
    document.querySelector('img').src = data.sprites.front_default;
    document.querySelector('img').alt = data.sprites.front_default;
  } catch (error) {
    console.log(`Fetching image errors`, error);
  }
}
/*------------------------------------------------------------------------------*/
async function main() {
  //making container that include the start button and other elements :
  const container = document.createElement('div');
  container.style.display = 'flex';
  container.style.flexDirection = 'column';
  container.style.alignItems = 'flex-start';

  const button = document.createElement('button');
  button.setAttribute('type', 'submit');
  button.textContent = 'Get Pokemon';
  button.style.fontSize = '22px';

  const select = document.createElement('select');
  select.style.margin = '1% 0 5% 0';
  select.style.fontSize = '22px';
  select.style.color = 'white';
  select.style.backgroundColor = 'rgb(105,105,105)';

  const img = document.createElement('img');
  img.style.width = '12%';

  container.appendChild(button);
  container.appendChild(select);
  container.appendChild(img);

  document.body.appendChild(container);

  try {
    // Add an event listener to the start button to call function fetchData and then function fetchAndPopulatePokemons :
    button.addEventListener('click', async () => {
      const data = await fetchData(
        'https://pokeapi.co/api/v2/pokemon?limit=151'
      );
      fetchAndPopulatePokemons(data);
    });
  } catch (error) {
    console.log(`HTTP or network errors`, error);
  }
}

window.addEventListener('load', main);
