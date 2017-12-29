/**
 * Swapping variable values can be done with destructuring.
 */
let onShelf = 'Skull';
let onTable = 'Love Letter';

[onShelf, onTable] = [onTable, onShelf];

/**
 * Functions can return an object, which can then be
 * destructured into separate values. Order doesn't even
 * matter, and not all values need to be accounted for.
 */
function lookupRating(game) {
  const ratings = {
    boardGameGeek: 8.4,
    personal: 9.0,
    reddit: 8.2,
    youTube: 7.2
  };
  return ratings;
}

const { personal, youTube } = lookupRating('Agricola');

/**
 * Function parameters can be stored in a single object to
 * make order unimportant, and to allow for missing parameters,
 * even no parameters at all.
 */
function finalRating({ base, bggAdjustment = 0.88, hypeFactor = 1 } = {}) {
  return base * bggAdjustment + hypeFactor
}

const rating = finalRating({ bggAdjustment: 0.9, base: 8.5 });
