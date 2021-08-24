
// list of pokemon
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
]

// a loop which lists each pokemon name with thier respective height
// gives a special lebel when height is greater than 2
pokemonList.forEach(function(pokemon) {
  if (pokemon.height > 2) {
    document.write('<p>' + pokemon.name + ' (height:' + pokemon.height + ')' + ' -Wow that is big! </p>'  );
    } else {
    document.write('<p>' + pokemon.name + ' (height:' + pokemon.height + ')</p>');
  }
});
