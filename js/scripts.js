

let pokemonRepository = (function () {
  let pokemonList = [
    {
      name: 'Venusaur',
      height: 1,
      type: ['grass', 'poison']
    },

    {
      name: 'Charizard',
      height: 2,
      type: ['fire', 'flying']
    },

    {
      name: 'Beedrill',
      height: 1,
      type: ['bug', 'poison']
    },

    {
      name: 'Pidgeot',
      height: 3,
      type: ['flying', 'normal']
    },

    {
      name: 'Nidoking',
      height: 1,
      type: ['ground', 'poison']
    }
  ];

  function add(newPokemon) {
    pokemonList.push(newPokemon);
  }

  function getAll() {
    return pokemonList;
  }

  function showDetails(pokemon){
   console.log(pokemon);
  }

  function addListItem(pokemon){
    let pokemonUl = document.querySelector('.pokemon-list');
    let pokemonItem = document.createElement('li');
    let button = document.createElement('button');
    button.innerText = pokemon.name;
    button.classList.add('button-class');
    pokemonItem.appendChild(button);
    pokemonUl.appendChild(pokemonItem);

    button.addEventListener('Click', function(){
      showDetails(pokemon);
    });
  }

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem
  };
}) ();

pokemonRepository.add (
  {
    name:'Metapod',
    height: 0.7,
    type: ['bug']
  }
);

// a loop which lists each pokemon
pokemonRepository.getAll().forEach(function(pokemon) {
  pokemonRepository.addListItem(pokemon);
});
