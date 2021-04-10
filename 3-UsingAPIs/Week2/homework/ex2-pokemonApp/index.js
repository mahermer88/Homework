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
async function fetchData(url) {
  const data = await fetch(url);
  const response = await data.json();
  if (response.status < 200 && response.status >= 400) {
    return new Error('HTTP or network errors');
  }
  return response;
}

async function fetchAndPopulatePokemons() {
  try {
    const select = document.querySelector('select');
    if (!select.textContent) {
      const data = await fetchData(
        'https://pokeapi.co/api/v2/pokemon?limit=151'
      );
      const namesArray = data.results;
      namesArray.forEach((element) => {
        const option = document.createElement('option');
        select.appendChild(option);
        option.textContent = element.name;
      });
    }
    select.onchange = () => {
      select.value = select[select.selectedIndex].textContent;
      fetchImage(select.value);
    };
  } catch (error) {
    const errorTitle = document.createElement('h3');
    document.querySelector('div').appendChild(errorTitle);
    errorTitle.textContent = `Fetching names errors: ${error.message}`;
    errorTitle.style.color = 'red';
  }
}

async function fetchImage(pokemonName) {
  try {
    const data = await fetchData(
      `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
    );
    let image = document.querySelector('img');
    if (!image) {
      image = document.createElement('img');
      document.querySelector('div').appendChild(image);
    }
    image.src = data.sprites.front_default;
    image.style.width = '12%';
  } catch (error) {
    const errorTitle = document.createElement('h3');
    document.querySelector('div').appendChild(errorTitle);
    errorTitle.textContent = `Fetching image errors: ${error.message}`;
    errorTitle.style.color = 'red';
  }
}

function main() {
  const container = document.createElement('div');
  document.body.prepend(container);
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

  container.append(button, select);

  button.addEventListener('click', fetchAndPopulatePokemons);
}

window.addEventListener('load', main);
