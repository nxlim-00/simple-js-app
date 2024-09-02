let pokemonRepository = (function () {
  let modalContainer = $('.modal');
  let pokemonList = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon?limit=72';

  function getAll() {
    return pokemonList;
  }

  function add(pokemon) {
    if (
      typeof pokemon === 'object' &&
      'name' in pokemon &&
      'detailsUrl' in pokemon
    ) {
      pokemonList.push(pokemon);
    } else {
      console.log('Invalid pokemon object');
    }
  }

  // loading message while data gets fetched
  function showLoadingMessage() {
    document.querySelector('#loading-message').style.display = 'block';
  }

  function hideLoadingMessage() {
    document.querySelector('#loading-message').style.display = 'none';
  }

  // promise function to load list of pokemons
  async function loadList() {
    showLoadingMessage();
    return fetch(apiUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (json) {
        console.log(json.previous, json.next);
        json.results.forEach(function (item) {
          let pokemon = {
            name: item.name,
            detailsUrl: item.url,
          };
          add(pokemon);
        });
      })
      .then(function () {
        hideLoadingMessage();
      })
      .catch(function (e) {
        console.error(e);
      });
  }

  // load details of pokemon
  async function loadDetails(item) {
    let url = item.detailsUrl; // detailsUrl defined in loadList-function
    showLoadingMessage();
    try {
      const response = await fetch(url);
      const details = await response.json();
      // adding details to items
      item.imageUrl = details.sprites.other.showdown.front_default;
      item.height = details.height;
      item.weight = details.weight;
      item.types = details.types;
    } catch (e) {
      console.error(e);
    } finally {
      hideLoadingMessage();
    }
  }

  // function add list item to DOM
  function addListItem(pokemon) {
    let pokeList = document.querySelector('.pokemon-list');
    let listItem = document.createElement('div');
    let button = document.createElement('button');

    button.innerText =
      pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
    button.classList.add('poke-btn', 'btn-primary', 'btn');
    button.setAttribute('data-target', '#pokeModal');
    button.setAttribute('data-toggle', 'modal');
    listItem.classList.add('poke-btn-container', 'col');

    listItem.appendChild(button);
    pokeList.appendChild(listItem);

    button.addEventListener('click', function () {
      showDetails(pokemon);
    });
  }

  function showModal(pokemon) {
    let modalBody = $('.modal-body');
    let modalTitle = $('.modal-title');

    modalTitle.empty();
    modalBody.empty();

    let pokemonName = $(
      '<h1>' +
        pokemon.name.charAt(0).toUpperCase() +
        pokemon.name.slice(1) +
        '</h1>'
    );
    let imageElement = $('<img class="modal-img" style="width:30%">');
    imageElement.attr('src', pokemon.imageUrl);
    imageElement.attr('alt', `Image of ${pokemon.name}`);

    let pokemonHeight = $(`<h2> Height: ${pokemon.height}m</h2>`);
    let pokemonWeigth = $(`<h2> Weight: ${pokemon.weight}kg</h2>`);
    let pokemonTypes = $(
      `<h2> Types: ${pokemon.types
        .map((type) => type.type.name)
        .join(', ')}</h2>`
    );

    modalTitle.append(pokemonName);
    modalBody.append(imageElement);
    modalBody.append(pokemonHeight);
    modalBody.append(pokemonWeigth);
    modalBody.append(pokemonTypes);

    $('#pokeModal').modal('show');
  }

  function showDetails(pokemon) {
    loadDetails(pokemon).then(function () {
      showModal(pokemon);
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
    hideLoadingMessage: hideLoadingMessage,
    showModal: showModal,
  };
})();

pokemonRepository.loadList().then(function () {
  pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});
