/**
 * Make an Object from a bunch of variables, with properties that
 * share the same name.
 */
const title = 'The Castles of Burgundy';
const designer = 'Stefan Feld';
const rank = 12;
const game = {
  title,
  designer,
  rank
};
console.log(game);

/**
 * No need for arrow functions here, since there is no weirdness
 * with scope and the this keyword.
 */
const gameList = {
  create() {
  },
  rate(rating) {
  }
}

/**
 * Create an Object literal with keys based on other key values.
 */
const key = 'boxSize';
const value = 11;
const box = {
  [key]: value,
  [`${key}Lid`]: value + 1
}
console.log(box);

const keys = ['title', 'designer', 'rank'];
const values = ['7 Wonders', 'Antoine Bauza', 26];
const otherGame = {
  [keys.shift()]: values.shift(),
  [keys.shift()]: values.shift(),
  [keys.shift()]: values.shift()
}
console.log(otherGame);
