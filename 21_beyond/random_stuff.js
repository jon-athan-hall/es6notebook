/**
 * Class properties aka class initializers.
 */
class Game {
  constructor(plays) {
    // this.plays = plays;
  }
  // plays = 0; // Do it this way instead, for every instance.
}

/**
 * New String methods available for padding strings: padStart and padEnd.
 */
let paddedGame = 'Agricola';
paddedGame = paddedGame.padStart(20, '!'); // Pad up to 20 characters.
console.log(paddedGame);

/**
 * Exponential operator included in ES7.
 */
let finalNumber = 3 ** 3;
console.log(finalNumber);

/**
 * Trailing commas in a function parameters (are fine with arrays and objects already).
 */
const games = ['Agricola', '7 Wonders',];
function loadPlayers(teacher, friend,) {
}

/**
 * Object.keys was available to get all keys. Now there is .entries() and .values().
 */
const boardGames = {
  'Dominion': 'Donald',
  '7 Wonders': 'Antoine',
  'The Castles of Burgundy': 'Stefan'
};

console.log(Object.values(boardGames));
