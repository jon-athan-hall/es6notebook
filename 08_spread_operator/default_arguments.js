/**
 * No need to check for undefined parameters passed in.
 * Instead set the default values in the function definition.
 */
function calculateRating(strategy, theme = 5, art = 5) {
  return 0.4 * strategy + 0.4 * theme + 0.2 * art;
}

/**
 * There are many ways to call that function now, with the
 * default parameters set up.
 */
const rating = calculateRating(8);
const anotherRating = calculateRating(9, undefined, 3);
console.log(rating);
