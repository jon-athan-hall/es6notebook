/**
 * Iterables are any type that can be looped over. There are plenty
 * of ways to loop but the "for of" syntax is the best.
 */
const publishers = ['Fantasy Flight', 'Portal', 'Alea', 'Mayfair', 'Stronghold'];

/**
 * The classic for loop can be confusing syntax for some, and it doesn't
 * read as nicely.
 */
for (let i = 0; i < publishers.length; i++) {
  console.log(publishers[i]);
}

/**
 * The forEach loop, which requires a function as a parameter. In this case,
 * an arrow function is used. This loop does not allow for break or continue.
 */
publishers.forEach((publisher) => {
  console.log(publisher);
})

/**
 * The for in loop gives the index value, not the item itself. If the
 * Array prototype was modified, this will iterate over all things added
 * to the Array, not just the items.
 */
for (const index in publishers) {
  console.log(publishers[index]);
}

/**
 * The for of loop is the best of all worlds, but can't be used with Objects.
 */
for (const publisher of publishers) {
  if (publisher === 'Alea') {
    continue;
  }
  console.log(publisher);
}

/**
 * Iterate over the ArrayIterator, not just the Array, and more data is available.
 * Combo that extra data with destructuring in the syntax.
 */
for (const [index, publisher] of publishers.entries()) {
  console.log(`${publisher} is item number ${index + 1} in the array.`);
}
