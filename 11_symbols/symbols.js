/**
 * There is a new primitive type in JavaScript.
 * The original six are: number, string, object, boolean, null, undefined.
 * Symbols are unique identifiers that avoid naming conflicts.
 */
const name = Symbol('Bauza'); // Descriptor for the absolutely unique symbol.
const designer = Symbol('Bauza');

/**
 * Both of these return false.
 */
console.log(name == designer);
console.log(name === designer);

/**
 * Another use case where some keys may repeat.
 * These are not innumberable so cannot be looped over.
 */
const games = {
  [Symbol('Castles')]: { score: 6.5 },
  [Symbol('Castles')]: { score: 10 },
};

/**
 * Workaround for looping through an array of symbols.
 */
const symbols = Object.getOwnPropertySymbols(games);
const data = symbols.map(symbol => games[symbol]);
console.log(data);
