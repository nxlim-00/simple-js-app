let pokemonRepository = (function () {
  let pokemonList = [
    {
      name: "Snorlax", 
      weight: 460, 
      types: ['normal']
    },
    {
      name: "Charizard", 
      weight: 90, 
      types: ['fire', 'flying']
    },
    {
      name: "Jigglypuff", 
      weight: 5, 
      types: ['fairy', 'normal']
    }
  ];
 
/*let result = pokemonRepository.filter((pokemon) => pokemon.length > 6);
console.log(result); */

function getAll() {
  return pokemonList;
}

function add(pokemon) {
  if (
    typeof pokemon === "object" &&
    "name" in pokemon &&
    "weight" in pokemon &&
    "types" in pokemon
  ) {
    pokemonList.push(pokemon);
  } else {
    console.log("Invalid pokemon object");
  }
}
  
function showDetails(pokemon) {
  console.log(pokemon)
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
  button.addEventListener("click", function(){
    showDetails(pokemon);
  });
};

return {
  getAll: getAll,
  add: add,
  addListItem: addListItem,
  showDetails: showDetails
  };
})();

console.log(pokemonRepository.getAll());
pokemonRepository.add({name: "Charmander", weight: 8.5, types: ['fire']});

pokemonRepository.getAll().forEach(function (pokemon) {
  pokemonRepository.addListItem(pokemon);
});