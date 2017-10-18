/**
 * Template strings offer a new way to build strings,
 * with backticks instead of single or double quotes.
 */
const game = 'Dominion';
const designer = 'Donald Vaccarino';
const rating = 4.5;

/**
 * Use the dollar sign and curlies to inject variable values.
 * Math and other manipulation can be done inline too.
 */
const message = `I like the game ${game} and I rate it a ${rating * 2}.`;
console.log(message);

/**
 * These can exist on multiple lines without any trouble.
 */
const markup = `
  <div class="game">
    <h2 class="game__name">
      ${game}
      <span class="game__byline">by Donald Vaccarino</span>
    </h2>
  </div>
`;

document.body.innerHTML = markup;

const games = [
  { name: '7 Wonders', rating: 9.5 },
  { name: 'Agricola', rating: 9 },
  { name: 'Castles of Burgundy', rating: 10, designer: 'Stefan Feld' }
];

function changeRating(rating) {
  return `
    <span class="rating__value">
      ${rating - 0.5}
    </span>
  `;
}

/**
 * Template strings can be nested inside one another, and can
 * include arrow functions. The map function returns an Array so
 * join them all the <li> elements together. Ternary operators work too,
 * as well as function calls.
 */
const ratingMarkup = `
  <ul class="ratings">
    ${games.map(game => `
      <li class="rating">
        ${game.name} is a ${changeRating(game.rating)}
        ${game.designer ? ` by ${game.designer}` : ''}
      </li>
    `).join('')}
  </ul>
`;

document.body.innerHTML = ratingMarkup;
