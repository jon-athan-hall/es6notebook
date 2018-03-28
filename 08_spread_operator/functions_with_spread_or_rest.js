/**
 * Spread function parameters are treated as individual
 * items, instead as a single Array.
 */
const designers = ['Bauze', 'Feld', 'Teuber'];
const newDesigners = ['Dennen', 'Al-JouJou'];

designers.push(...newDesigners);

/**
 * The rest param looks a lot like spread, but does the
 * opposite. This will take the remaining params and put
 * them into an Array, no matter how many.
 */
function convertScores(multiplier, ...scores) {
  console.log(scores);
}

convertScores(1.25, 10, 8, 7.5, 7, 8.5, 5);

/**
 * The rest operator can also be combined withdestructuring.
 */
const game = ['Castles of Burgundy', 'Stefan Feld', 6.5, 8, 10, 9.5];
const [title, designer, ...ratings] = game;
console.log(ratings);
