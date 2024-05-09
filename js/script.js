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
  
  /* let validInput = {
    name: "string",
    weight: "number",
    types: "object"
  };

  let isValid = Object.keys(validInput).every(key => {
    return pokemon.hasOwnProperty(key) && typeof pokemon[key] === validInput[key]; // checking if key exists in pokemon object and if type is same
  });

  if (isValid && Array.isArray(pokemon.types) && pokemon.types.length > 0) { // add pokemon if conditions are fulfilled
    pokemonList.push(pokemon);
  } else {
    console.error('Invalid pokemon object:', pokemon);
  }

  pokemonList.push(pokemon); */

return {
  getAll: getAll,
  add: add
  };
})();

console.log(pokemonRepository.getAll());
pokemonRepository.add({name: "Charmander", weight: 8.5, types: ['fire']});

pokemonRepository.getAll().forEach(function (pokemon) {
  document.write(pokemon.name + " (weight: " + pokemon.weight + ")");

  if (pokemon.weight > 100) {
    document.write(" - That's a heavy pokemon!");
  } else if (pokemon.weight < 50) {
    document.write(" - That's a lightweight!")
  }

  document.write("</p>");
});