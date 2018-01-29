/**
 * Take something that is Array-ish and make it an array. It may
 * have a length, and some Array methods, but is a NodeList.
 */
const boardGames = document.querySelectorAll('.board-games li');
const boardGamesArray = Array.from(boardGames);

/**
 * Array.from takes a second argument which is a map function.
 * Helpful with the arguments parameter in functions.
 */
const titles = Array.from(boardGames, boardGame => {
  return boardGame.textContent;
});
console.log(titles);

/**
 * Simply creates an array from all the arguments supplied.
 */
const ratings = Array.of(9.5, 8, 6.5, 8, 9, 7.5);
console.log(ratings);

/**
 * The follow methods are useful for API responses which tend to be
 * JSON in the form of an Array of Objects. They all take a method
 * parameter than returns true/false.
 */
const games = [
  {
    "title": "7 Wonders",
    "designer": "Antoine Bauza",
    "rank": 40
  },
  {
    "title": "Agricola",
    "designer": "Uwe Rosenberg",
    "rank": 15
  },
  {
    "title": "Ticket to Ride",
    "designer": "Alan R. Moon",
    "rank": 119
  }
];

const rank = 15;
const game = games.find(game => game.rank === rank);
console.table(game);
const gameIndex = games.findIndex(game => game.rank === rank);
console.log(gameIndex);

/**
 * Special conditional Array methods that check some or all values,
 * checking with the boolean function parameter.
 */
const ranks = [9, 87, 36, 2, 110];
const topTenPresent = ranks.some(rank => rank <= 10);
console.log(topTenPresent);
const allTopHundred = ranks.every(rank => rank <= 100);
console.log(allTopHundred);
