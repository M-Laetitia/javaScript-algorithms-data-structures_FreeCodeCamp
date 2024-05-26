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

  } catch (err) {
    // If an error occurs during the fetch or JSON parsing, the catch block handles it and display an alert message.
    alert('Pokémon not found');
    // Log the error message to the console for debugging purposes
    console.log(`Pokémon not found: ${err}`);
  }
};

searchForm.addEventListener('submit', e => {
  e.preventDefault();
  getPokemon();
});
