let pokemonRepository = (function () {
  let pokemonList = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon?limit=150';

function getAll() {
  return pokemonList;
}

function add(pokemon) {
  if (
    typeof pokemon === "object" &&
    "name" in pokemon // &&
    // "detailsUrl" in pokemon
  ) {
    pokemonList.push(pokemon);
  } else {
    console.log("Invalid pokemon object");
  }
}

// loading message while data gets fetched
function showLoadingMessage() {
  document.getElementById('loading-message').style.display = 'block';
}

function hideLoadingMessage() {
  document.getElementById('loading-message').style.display = 'none';
}

// Function add list item to DOM
function addListItem(pokemon) {
  let pokemonList = document.querySelector(".pokemon-list");
  
  // create list item
  let listPokemon = document.createElement("li");
  listPokemon.style.listStyle = "none";

  // create button
  let button = document.createElement("button");
  button.innerText = pokemon.name;
  button.classList.add("button-class");

  // append button to list item
  listPokemon.appendChild(button);
  pokemonList.appendChild(listPokemon);

  // eventListener button to show details
  button.addEventListener("click", function(){
    showDetails(pokemon);
  });
}

// promise function to load list of pokemons
async function loadList() {
  showLoadingMessage();
  return fetch(apiUrl).then(function (response) { // get  
    return response.json(); // convert response to json => all the data from the apiUrl
  }).then(function (json) {

    /* "for each of this item create a pokemon and turn that pokemon into an object with two keys and two values" */
    json.results.forEach(function (item) { 
    /* 'results' is on data page of the api -- in this example: results contains an array full of pokemon */

      let pokemon = {
        name: item.name, // item is parameter of function and name + url is from api
        detailsUrl: item.url
      };
      add(pokemon);
      console.log(pokemon);
    });
  }).then(function () {
    hideLoadingMessage();
  })
  .catch(function (e) {
    console.error(e);
  })
}

// load details of pokemon
async function loadDetails (item) {
  let url = item.detailsUrl; // detailsUrl defined in loadList function
  showLoadingMessage();
  try {
    const response = await fetch(url);
    const details = await response.json();
    // adding details to items
    item.imageUrl = details.sprites.front_default; // sprites.front_default = item in api and defines the preferred perspective of pokemon
    item.height = details.height;
    item.types = details.types;
  } catch (e) {
    console.error(e);
  } finally {
    hideLoadingMessage();
  }
}

function showDetails(pokemon) {
  loadDetails(pokemon).then(function () {
    console.log(pokemon)
  });
}

return {
  getAll: getAll,
  add: add,
  addListItem: addListItem,
  showDetails: showDetails,
  loadList: loadList,
  loadDetails: loadDetails,
  showLoadingMessage: showLoadingMessage,
  hideLoadingMessage: hideLoadingMessage
  };
})();

pokemonRepository.loadList().then(function() { 
  pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});
