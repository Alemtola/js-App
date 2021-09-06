

let pokemonRepository = (function () {
  let pokemonList = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

  function add(newPokemon) {
    pokemonList.push(newPokemon);
  }

  function getAll() {
    return pokemonList;
  }


  function addListItem(pokemon){
    let pokemonUl = document.querySelector('.pokemon-list');
    let pokemonItem = document.createElement('li');
    let button = document.createElement('button');
    button.innerText = pokemon.name;
    button.classList.add('button-class');
    pokemonItem.appendChild(button);
    pokemonUl.appendChild(pokemonItem);
    button.addEventListener('click', function(event){
      showDetails(pokemon);
    });
  }

  //loads list of all pokemon from the pokedex api
  function loadList() {
    return fetch(apiUrl).then(function (response) {
      return response.json();
    }).then(function (json) {
      json.results.forEach(function (item) {
        let pokemon = {
          name: item.name,
          detailsUrl: item.url
        };
        add(pokemon);
        console.log(pokemon);
      });
    }).catch(function (e) {
      console.error(e);
    })
  }

  //loads the details for all pokemon from the pokedex api
  function loadDetails(item) {
   let url = item.detailsUrl;
   return fetch(url).then(function (response) {
     return response.json();
   }).then(function (details) {
     // add the details to the item
     item.imageUrl = details.sprites.front_default;
     item.height = details.height;
     item.types = details.types;
   }).catch(function (e) {
     console.error(e);
   });
  }

  function showDetails(pokemon) {
    loadDetails(pokemon).then(function () {
      showModal(pokemon);
    });
  }

 //selecting the modal container
 let modalContainer = document.querySelector('#modal-container');

  function showModal(pokemon) {

   //clearing any existing modal content
   modalContainer.innerHTML = '';

   //creating the modal
   let modal = document.createElement('div');
   modal.classList.add('modal');

   //adding contents to the modal...close button
   let closeButtonElement = document.createElement('button');

   //adding a class to the button
   closeButtonElement.classList.add('modal-close');

   //addint inner text to the button
   closeButtonElement.innerText = 'Close';

   //closing the modal when close button clicked
   closeButtonElement.addEventListener('click', hideModal);

   //creating and assigning the modal title
   let titleElement = document.createElement('h1');
   titleElement.innerText = pokemon.name;

   //creating and assigning the modal inner text to pokemon height
   let contentElement = document.createElement('p');
   let pokemonHeight = pokemon.height;
   contentElement.innerText = 'Height: ' + pokemonHeight;

    //adding pokemon image to the modal
    let imageElement = document.createElement('img');
    imageElement.setAttribute('src', pokemon.imageUrl);
    imageElement.setAttribute('alt','picture of' + pokemon.name);

    //appending all contents of the modal to modal container
    modal.appendChild(closeButtonElement);
    modal.appendChild(imageElement);
    modal.appendChild(titleElement);
    modal.appendChild(contentElement);
    modalContainer.appendChild(modal);

    //showing the modal
    modalContainer.classList.add('is-visible');
  }

  //hiding the modal
  function hideModal() {
    modalContainer.classList.remove('is-visible');
  }

  //closing modal when Escape button is pressed
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
     hideModal();
    }
  });

  //closing modal when modal container is clicked
  modalContainer.addEventListener('click', (e) => {
    let target = e.target;
    if (target === modalContainer) {
      hideModal();
    }
  });


  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails,
    showDetails: showDetails,
    showModal: showModal,
    hideModal: hideModal
  };
}) ();


// iterates over each pokemon
pokemonRepository.loadList().then(function (){
  pokemonRepository.getAll().forEach(function(pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});
