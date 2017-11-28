/**
 * Destructuring allows for grabbing data from objects, arrays,
 * maps, sets, etc. quickly and easily.
 */
const game = {
  name: 'The Castles of Burgundy',
  designer: 'Stefan Feld',
  players: {
    min: 2,
    max: 4,
    best: 3
  },
  publisher: 'Alea'
};

const { name, designer } = game;

/**
 * This works for deeply nested objects. Variable
 * names can be changed on the fly. Also default values
 * can be supplied in case the object is missing something.
 */
const { min = 1, max, best: ideal = 3 } = game.players;

/**
 * This is an example using an array instead. Notice that
 * brackets are used in this case. Any remaining elements not
 * destructured can be stored in a leftover array.
 */
const ranking = ['The Castles of Burgundy', '7 Wonders', 'Clank!', 'Dominion', 'Skull'];
const [gold, silver, bronze, ...theRest] = ranking;
