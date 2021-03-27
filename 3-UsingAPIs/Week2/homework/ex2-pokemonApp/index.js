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
  try {
    const data = await fetch(url);
    const parsedData = await data.json();
    return parsedData;
  } catch (error) {
    console.log(`HTTP or network errors: `, error.message);
  }
}

async function fetchAndPopulatePokemons() {
  try {
    const data = await fetchData('https://pokeapi.co/api/v2/pokemon?limit=151');
    const select = document.querySelector('select');
    const namesArray = data.results;
    namesArray.forEach((element) => {
      const option = document.createElement('option');
      option.textContent = element.name;
      select.appendChild(option);
    });
    select.onchange = () => {
      select.value = select[select.selectedIndex].textContent;
      fetchImage(select.value);
    };
  } catch (error) {
    console.log(`Fetching names errors`, error.message);
  }
}

async function fetchImage(pokemonName) {
  try {
    const data = await fetchData(
      `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
    );
    const image = document.querySelector('img');
    image.src = data.sprites.front_default;
  } catch (error) {
    console.log(`Fetching image errors`, error.message);
  }
}

async function main() {
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

  const image = document.createElement('img');
  image.style.width = '12%';

  container.append(button, select, image);

  try {
    button.addEventListener('click', fetchAndPopulatePokemons);
  } catch (error) {
    console.log(`HTTP or network errors`, error.message);
  }
}

window.addEventListener('load', main);
