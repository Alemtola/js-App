let pokemonRepository = (function() {
  let pokemonList = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=75';

  function add(newPokemon) {
    pokemonList.push(newPokemon);
  }

  function getAll() {
    return pokemonList;
  }

  function addListItem(pokemon) {
    let pokemonUl = document.querySelector('.pokemon-list');

    let pokemonItem = document.createElement('li');
    pokemonItem.classList.add('group-list-item');

    let pokeButton = document.createElement('button');
    pokeButton.innerText = pokemon.name;
    pokeButton.classList.add('button-class', 'btn', 'btn-block');

    pokeButton.setAttribute('data-target', '#myModal');
    pokeButton.setAttribute('data-toggle', 'modal');

    pokemonItem.appendChild(pokeButton);
    pokemonUl.appendChild(pokemonItem);
    pokeButton.addEventListener('click', function(event) {
      showDetails(pokemon);
    });
  }

  //loads list of all pokemon from the pokedex api
  function loadList() {
    return fetch(apiUrl)
      .then(function(response) {
        return response.json();
      })
      .then(function(json) {
        json.results.forEach(function(item) {
          let pokemon = {
            name: item.name,
            detailsUrl: item.url
          };
          add(pokemon);
        });
      })
      .catch(function(e) {
        console.error(e);
      });
  }

  //loads the details for all pokemon from the pokedex api
  function loadDetails(item) {
    let url = item.detailsUrl;
    return fetch(url)
      .then(function(response) {
        return response.json();
      })
      .then(function(details) {
        // add the details to the item
        item.imageUrl = details.sprites.front_default;
        item.height = details.height;
        item.weight = details.weight;
        item.types = [];
        for (let i = 0; i < details.types.length; i++) {
          item.types.push(details.types[i].type.name);
        }
      })
      .catch(function(e) {
        console.error(e);
      });
  }

  //displays the details of a given pokemon
  function showDetails(pokemon) {
    loadDetails(pokemon).then(function() {
      showModal(pokemon);
    });
  }

  //the modal
  function showModal(item) {
    let modalBody = $('.modal-body');
    let modalTitle = $('.modal-title');
    let modalHeader = $('.modal-header');

    modalTitle.empty();
    modalBody.empty();

    //creating the contents of the modal
    let titleElement = $('<h1>' + item.name + '</h1>');

    let imageElement = $('<img class="modal-img" style="width:50%">');
    imageElement.attr('src', item.imageUrl);

    let heightElement = $('<p>' + 'Height : ' + item.height + '</p>');

    let weightElement = $('<p>' + 'Weight : ' + item.weight + '</p>');

    let typesElement = $('<p>' + 'Types : ' + item.types.join(', ') + '</p>');

    //appending all contents of the modal to modal container
    modalTitle.append(titleElement);
    modalBody.append(imageElement);
    modalBody.append(heightElement);
    modalBody.append(weightElement);
    modalBody.append(typesElement);
  }

  // to search for a pokemon by its name
  let searchField = document.querySelector('.form-control');

  //adding event lestenerto the search input field
  searchField.addEventListener('input', function() {
    let pokeList = document.querySelectorAll('li');
    let value = searchField.value.toUpperCase();

    pokeList.forEach(function(pokemon) {
      if (pokemon.innerText.toUpperCase().indexOf(value) > -1) {
        pokemon.style.display = '';
      } else {
        pokemon.style.display = 'none';
      }
    });
  });

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails,
    showDetails: showDetails,
    showModal: showModal
  };
})();

// iterates over each pokemon
pokemonRepository.loadList().then(function() {
  pokemonRepository.getAll().forEach(function(pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});
