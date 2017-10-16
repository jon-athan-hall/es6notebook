/**
 * Arrow functions are concise, feature implicit returns,
 * and does not rebind the value of this when inside another
 * function.
 */
const games = ['Mage Knight', 'La Granja', 'Onirim'];

/**
 * This is the old way without arrow functions.
 */
const soloGames = games.map(function(game) {
  return `${game} can be played solo.`;
});

/**
 * Delete keyword function, add fat arrow.
 * One parameter doesn't need parentheses.
 * Use implicit return with one-liners.
 * Pass empty parentheses if there are no arguments!
 */
const newSoloGames = games.map(game => `${game} is solo-capable.`);
console.log(newSoloGames);

/**
 * Arrow functions are always anonymous; they have
 * no name to be called later. Though they can be
 * stored in variables.
 */
const rateGame = () => console.log('This game is great.');
rateGame();

/**
 * Extra parentheses around multiple parameters.
 * Extra parentheses shows it's an implicit return of an Object too,
 * and not the usual function definition curly braces.
 * Bonus feature: if the attribute and variable have the same name, drop one.
 */                                                                                                                                                                           
const publisher = 'Alea';
const otherGames = ['The Castles of Burgundy', 'The Year of the Dragon', 'San Juan'];

const collection = otherGames.map((game, i) => ({ name: game, publisher, place: i + 1 }));
console.table(collection);
