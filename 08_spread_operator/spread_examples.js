/**
 * The spread operator can be used on any iterable.
 */
const games = ['Mage Knight', 'La Granja', 'Onirim'];
const newGames = ['Clank', 'Azul', 'Roll Player'];

const combinedGames = [...games, 'Dominion', ...newGames];
console.log(combinedGames);

/**
 * This can be helpful for copying an array without keeping
 * the same address reference.
 */
const moreGames = [...games];

/**
 * Even strings can be spread out into characters. This can
 * be used to manipulate text one letter at a time.
 */
const heading = document.querySelector('.jump');
heading.innerHTML = spanWrap(heading.textContent);

function spanWrap(word) {
  return [...word].map(letter => `<span>${letter}</span>`).join('');
}

/**
 * The spread operator works like Array.from for turning
 * collections like NodeList into true Arrays. It's not as
 * readable, but it is quicker.
 */
const letters = [...document.querySelectorAll('.jump span')];
console.log(letters);

/**
 * You can easily remove an item from an Array using spread.
 */
const reviews = [
  { id: 123456, text: 'This game is great.' },
  { id: 234567, text: 'This game is good.' },
  { id: 345678, text: 'This game is okay.' },
  { id: 456789, text: 'This game is bad.' }
];
const index = 2; // The index to delete.
const newReviews = [...reviews.slice(0, index), ...reviews.slice(index + 1)];
console.log(newReviews);
