/**
 * The arguments of a function can be iterated over, despite it not being a true
 * Array prototype.
 */
function averageRatings() {
  let total = 0;
  for (rating of arguments) {
    total += rating;
  }
  return total / arguments.length;
}

console.log('Average rating:', averageRatings(8, 9.5, 9, 7.5, 6, 9.5));

/**
 * A collection of DOM elements can be iterated over too, despite being a NodeList
 * and not an Array prototype.
 */
const boardgames = document.querySelectorAll('li');
for (const game of boardgames) {
  game.addEventListener('click', function() {
    console.log(this.textContent);
  });
} 

/**
 * Iterating over an Object is trickier, but there are options. Object.entries()
 * is not available yet, but it's coming. The "for in" is the best way to go for now.
 */
const game = {
  title: 'The Castles of Burgundy',
  designer: 'Stefan Feld',
  publisher: 'Alea',
  minPlayers: 2,
  maxPlayers: 4
};

for (const key in game) {
  const value = game[key];
  console.log(`The game's ${key} is ${value}`);
}
