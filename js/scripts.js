
// list of pokemon
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

  return {
    add: add,
    getAll: getAll
  };
}) ();

pokemonRepository.add (
  {
    name:'Metapod',
    height: 0.7
  }
);

// a loop which lists each pokemon name with thier respective height
// gives a special lebel when height is greater than 2
pokemonRepository.getAll().forEach(function(pokemon) {
  if (pokemon.height > 2) {
    document.write('<p>' + pokemon.name + ' (height:' + pokemon.height + ')' + ' -Wow that is big! </p>'  );
    } else {
    document.write('<p>' + pokemon.name + ' (height:' + pokemon.height + ')</p>');
  }
});
