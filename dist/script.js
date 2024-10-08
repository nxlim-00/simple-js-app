let pokemonRepository = (function () {
  $('.modal');
  let e = [];
  function t() {
    return e;
  }
  function n(t) {
    'object' == typeof t && 'name' in t && 'detailsUrl' in t
      ? e.push(t)
      : console.log('Invalid pokemon object');
  }
  function o() {
    document.querySelector('#loading-message').style.display = 'block';
  }
  function a() {
    document.querySelector('#loading-message').style.display = 'none';
  }
  async function i() {
    return (
      o(),
      fetch('https://pokeapi.co/api/v2/pokemon?limit=150')
        .then(function (e) {
          return e.json();
        })
        .then(function (e) {
          e.results.forEach(function (e) {
            let t = { name: e.name, detailsUrl: e.url };
            n(t), console.log(t);
          });
        })
        .then(function () {
          a();
        })
        .catch(function (e) {
          console.error(e);
        })
    );
  }
  async function l(e) {
    let t = e.detailsUrl;
    o();
    try {
      let n = await fetch(t),
        i = await n.json();
      (e.imageUrl = i.sprites.front_default),
        (e.height = i.height),
        (e.weight = i.weight),
        (e.types = i.types);
    } catch (l) {
      console.error(l);
    } finally {
      a();
    }
  }
  function s(e) {
    let t = $('.modal-body'),
      n = $('.modal-title');
    n.empty(), t.empty();
    let o = $(
        '<h1>' + e.name.charAt(0).toUpperCase() + e.name.slice(1) + '</h1>'
      ),
      a = $('<img class="modal-img" style="width:30%">');
    a.attr('src', e.imageUrl), a.attr('alt', `Image of ${e.name}`);
    let i = $('<p><h2> Height: </h2>' + e.height + '</p>'),
      l = $('<p><h2> Weight: </h2>' + e.weight + '</p>'),
      s = $(
        '<p><h2> Types: </h2>' +
          e.types.map((e) => e.type.name).join(', ') +
          '</p>'
      );
    n.append(o),
      t.append(a),
      t.append(i),
      t.append(l),
      t.append(s),
      $('#pokeModal').modal('show');
  }
  function p(e) {
    l(e).then(function () {
      s(e);
    });
  }
  return {
    getAll: t,
    add: n,
    addListItem: function e(t) {
      let n = document.querySelector('.pokemon-list'),
        o = document.createElement('div'),
        a = document.createElement('button');
      (a.innerText = t.name.charAt(0).toUpperCase() + t.name.slice(1)),
        a.classList.add('btn-primary', 'btn'),
        a.setAttribute('data-target', '#pokeModal'),
        a.setAttribute('data-toggle', 'modal'),
        o.classList.add('list-group-item', 'list-group-item-action'),
        o.appendChild(a),
        n.appendChild(o),
        a.addEventListener('click', function () {
          p(t);
        });
    },
    showDetails: p,
    loadList: i,
    loadDetails: l,
    showLoadingMessage: o,
    hideLoadingMessage: a,
    showModal: s,
  };
})();
pokemonRepository.loadList().then(function () {
  pokemonRepository.getAll().forEach(function (e) {
    pokemonRepository.addListItem(e);
  });
});
