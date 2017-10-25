/**
 * Method startsWith is always case-sensitive, and allows for
 * ignoring initial characters.
 */
const game = 'Arkham Horror: The Card Game';
game.startsWith('Arkham');

/**
 * Skip a certain number of characters before checking.
 */
game.startsWith('Horror', 7);

/**
 * Only include a certain number of characters when checking.
 */
console.log(game.endsWith(':', 14));

/**
 * For simply substring checking use the includes method. This
 * is case sensitive always.
 */
const designer = 'Nate French';
designer.includes('Fre');

/**
 * The repeat method offers a way to 
 */
const publisher = 'Fantasy Flight';

/**
 * Pads the left side of a string to fill up to the line length provided.
 * The repeat method is used here which takes a number as a parameter.
 */
function leftPad(text, length = 50) {
  return `${' '.repeat(length - text.length)}${text}`;
}

console.log(leftPad(game));
console.log(leftPad(designer));
console.log(leftPad(publisher));


