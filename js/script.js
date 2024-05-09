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

function getAll() {
  return pokemonList;
  }

function add(pokemon) {
  pokemonList.push(pokemon);
  }

return {
  getAll: getAll,
  add: add
  };
})();

pokemonRepository.getAll().forEach(function (pokemon) {
  document.write(pokemon.name + " (weight: " + pokemon.weight + ")");

  if (pokemon.weight > 100) {
    document.write(" - That's a heavy pokemon!");
  }

  document.write("</p>");
});
