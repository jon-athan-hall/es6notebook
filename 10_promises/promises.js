/**
 * Promises are usually used when fetching a JSON API request. There is
 * no need for jQuery's getJSON or ajax. Use the built-in fetch instead.
 * JavaScript is asynchronous, so the thing you want may not happen right
 * away.
 */
const postsPromise = fetch('https://wesbos.com/wp-json/wp/v2/posts');

/**
 * The first data returns a full collection that isn't necessarily JSON. And 
 * there is always an option to add a catch for any error too.
 */
postsPromise
  .then(data => data.json())
  .then(data => { console.log(data) })
  .catch(error => {
    console.error(error);
  })

const games = [
  { title: '7 Wonders', designer: 'Antoine Bauza', mechanic: 'drafting' },
  { title: 'Agricola', designer: 'Uwe Rosenberg', mechanic: 'worker placement' }
];

/**
 * Creating a new promise needs one function that takes two parameters. This
 * is useful for running some heavy computation while the user does something else,
 * or especially if waiting on some database response. These can be chained together!
 */
function getGameById(id) {
  return new Promise((resolve, reject) => {
    const game = games.find(game => game.id === id);
    if (game) {
      resolve(post);
    } else {
      reject(Error('No game found.'));
    }
  });
}

getGameById(2)
  .then(game => { console.log(game) })
  .catch(error => { console.error(error) })

/**
 * There's no need to chain promises together one after another. You can collectively
 * call them, and wait for all to resolve. Slowest Promise triggers the then. The responses
 * returned are collected in an Array.
 */
Promise.all([firstPromise, otherPromise])
  .then(responses => {
    return Promise.all(responses.map(response => response.json())
  })
  .then(responses => {
    const [firstPromiseData, otherPromiseData] = responses;
  ));
