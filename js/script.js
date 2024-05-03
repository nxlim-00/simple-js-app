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
]


/* for (let i = 0; i < pokemonList.length; i++) { // starting the array at position 0 
    let pokemon = pokemonList[i]; // pokemon is the name of each object in the array
    
    document.write(`<p>${pokemon.name} (weight: ${pokemon.weight})`); // looping through the name and the weight of each pokemon (object)

    if (pokemon.weight > 100) {
        document.write(" - That's a heavy pokemon!");
    }
    
    document.write("<p>");
}
 */

for (let i = 0; i < pokemonList.length; i++){
  document.write("<p>" + pokemonList[i].name + " (weight: " + pokemonList[i].weight + ")")

  if (pokemonList[i].weight > 100) {
    document.write(" - That's a heavy pokemon!");
  }

  document.write("<p>");
}
