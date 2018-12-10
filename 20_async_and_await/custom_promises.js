/**
 * Any function that returns a Promise has a Promised-based
 * API. It can then use then/then/catch or async/await.
 */
function thinkAboutTurn(amount) {
  return new Promise((resolve, reject) => {
    if (amount > 4000) {
      reject('That is too long of a time to plan the turn.');
    }
    setTimeout(() => resolve(`Planned turn for ${amount} milliseconds.`), amount);
  });
}

/**
 * This is the then/then/catch style.
thinkAboutTurn(3000).then(res => {
  console.log(res);
  return thinkAboutTurn(2000); // Returning this allows chaining over and over.
}).then(res => {
  console.log(res);
  return thinkAboutTurn(5000);
}).then(res => {
  console.log(res);
}).catch(err => {
  console.error(err);
});
 */

/**
 * Async/await is built on top of Promises. Just build an async function too.
 * const go = async () => {} is the arrow function style.
 */
async function go() {
  try {
    console.log('start');
    const res = await thinkAboutTurn(3000); // Would return a Promise if await wasn't there.
    console.log(res);
    console.log('end');
  } catch(err) {
    console.error(err);
  }
}

/*
 * A higher-order function could also be used to handle errors. You wrap
 * every function with a bigger function that simply adds a catch on the end.
 */

go();
