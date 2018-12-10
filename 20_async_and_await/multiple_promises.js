/**
 * Multiple Promises happening at one time that don't have
 * to wait turns.
 */
async function go() {
  const p1 = fetch('https://api.github.com/users/wesbos');
  const p2 = fetch('https://api.github.com/users/stolinski');
  const res = await Promise.all([p1, p2]); // Wait for both to complete.
  const dataPromises = res.map(r => r.json());
  const [wes, scott] = await Promise.all(dataPromises);
  console.log(wes, scott);
}

go();

/**
 * Promise.race will complete once the first request completes.
 */
