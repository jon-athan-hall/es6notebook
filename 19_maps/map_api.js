/**
 * Maps are like Sets but with key and value pairs.
 */
const games = new Map();

games.set('The Castles of Burgundy', 10);
games.set('Carcasonne', 7.5);
games.set('Dominion', 9);

/**
 * As usual, there are many methods available in the Map api.
 */
console.log(games.has('Dominion'));

/**
 * Maps can be looped over using forEach or for...of.
 */
games.forEach((val, key) => console.log(val, key));

for (const [key, val] of games) {
  console.log(key, val);
}
