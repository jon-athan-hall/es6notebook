/**
 * Sets are like arrays that must have unique items, with
 * some convenient methods. An array can be passed in with the
 * constructor.
 */
const games = new Set();

/**
 * Add and delete items like so.
 */
games.add('7 Wonders');
games.add('Azul');
games.add('The Castles of Burgundy');
games.delete('7 Wonders');

/**
 * This wipes the Set clear and returns an empty Set.
 */
games.clear();
games.add('Agricola');
games.add('Clank! In! Space!');
games.add('La Granja');
games.add('Carcassonne');

/**
 * With sets, keys and values are the same thing. There are
 * no indexes to reference, only each unique item in the Set.
 * These all do the same thing, and return a SetIterator for looping.
 */
games.keys();
games.values();
games.entries();

/**
 * You can use the generator syntax with .next() or build a loop.
 */
for (const game of games) {
  console.log(game);
}
