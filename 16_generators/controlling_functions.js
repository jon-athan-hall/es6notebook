/**
 * Generators are functions you can control, with starting, stopping, etc.
 * There is some new syntax involved, including an asterisk after function.
 * The yield keyword returns a value, and the next yield returns its value,
 * when the function is called next.
 */
function* listGames() {
  yield '7 Wonders';
  yield 'Gloomhaven';
  yield 'Agricola';
}

/**
 * Store the function in a variable to get a generator.
 */
const gameCollection = listGames();

/**
 * This returns an Object with a boolean key named done, and
 * another key named value, which holds the latest yield.
 */
gameCollection.next();

const gameRatings = [
  { name: '7 Wonders', rating: 9 },
  { name: 'King of Tokyo', rating: 6 },
  { name: 'Barenpark', rating: 8.5 }
];

/**
 * Yields can be created in a loop too.
 */
function* loop(arr) {
  for (const item of arr) {
    yield item.rating;
  }
}

const ratingGenerator = loop(gameRatings);
console.log(ratingGenerator.next());

/**
 * You can use the for...of loop with generators in place
 * of calling next() repeatedly.
 */
const otherGenerator = loop(gameRatings);
for (const rating of otherGenerator) {
  console.log(rating);
}
