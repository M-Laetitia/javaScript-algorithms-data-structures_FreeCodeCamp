const pokemonID = document.getElementById('pokemon-id');
const pokemonName = document.getElementById('pokemon-name');
const pokemonSprite = document.getElementById('pokemon-sprite');
const types = document.getElementById('types');
const height = document.getElementById('height');
const weight = document.getElementById('weight');
const hp = document.getElementById('hp');
const attack = document.getElementById('attack');
const defense = document.getElementById('defense');
const specialAttack = document.getElementById('special-attack');
const specialDefense = document.getElementById('special-defense');
const speed = document.getElementById('speed');
const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');

// Define an asynchronous function to fetch Pokémon data
const getPokemon = async () => {
  try {
    // Get the Pokémon name or ID from the input field and convert it to lowercase
    const pokemonNameOrId = searchInput.value.toLowerCase();

    // Fetch data from the Pokémon API using the name or ID
    // The await keyword pauses the function execution until the fetch promise is resolved
    const response = await fetch(
      `https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${pokemonNameOrId}`
    );

    // Await the response and parse it as JSON
    // This step also pauses the function execution until the promise is resolved
    const data = await response.json();

    // Pokémon info
    pokemonName.textContent = `${data.name.toUpperCase()}`;
    pokemonID.textContent = `#${data.id}`;
    weight.textContent = `Weight: ${data.weight}`;
    height.textContent = `Height: ${data.height}`;
    pokemonSprite.innerHTML = `
      <img id="sprite" src="${data.sprites.front_default}" alt="${data.name} front default sprite">
    `;

    // stats
    hp.textContent = data.stats[0].base_stat;
    attack.textContent = data.stats[1].base_stat;
    defense.textContent = data.stats[2].base_stat;
    specialAttack.textContent = data.stats[3].base_stat;
    specialDefense.textContent = data.stats[4].base_stat;
    speed.textContent = data.stats[5].base_stat;

    // types
    // Clear the content of the 'types' element
    types.innerHTML = "";
    types.innerHTML = data.types
      // Map over the types array to create an HTML string for each type
      .map(slot => `<span class="type ${slot.type.name}">${slot.type.name}</span>`)
      // Join the array of HTML strings into a single string
      .join('');

  } catch (err) {
    // If an error occurs during the fetch or JSON parsing, the catch block handles it and display an alert message.
    alert('Pokémon not found');
    // Log the error message to the console for debugging purposes
    console.log(`Pokémon not found: ${err}`);
  }
};

searchForm.addEventListener('submit', e => {
  // clear any previous content
  clearDisplay();
  e.preventDefault();
  getPokemon();
});

// clear any previous content
const clearDisplay = () => {
  const sprite = document.getElementById('sprite');
  if (sprite) sprite.remove();

  // reset stats
  pokemonName.textContent = '';
  pokemonID.textContent = '';
  types.innerHTML = '';
  height.textContent = '';
  weight.textContent = '';
  hp.textContent = '';
  attack.textContent = '';
  defense.textContent = '';
  specialAttack.textContent = '';
  specialDefense.textContent = '';
  speed.textContent = '';
};