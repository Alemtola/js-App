
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
// gives a special lebel when height is more than 2
for (let i = 0; i < pokemonList.length; i++) {
  if (pokemonList[i].height > 2) {
    document.write('<p>' + pokemonList[i].name + ' (height:' + pokemonList[i].height + ')' + ' -Wow that is big! </p>'  );
    } else {
    document.write('<p>' + pokemonList[i].name + ' (height:' + pokemonList[i].height + ')</p>');
  }
}
