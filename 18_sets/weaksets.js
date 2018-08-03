/**
 * WeakSet is similar to Set but with certain limitations that
 * may act as benefits for some situations. They can only ever
 * contain objects, have no iterator, and have no clear method.
 */
let game1 = { name: '7 Wonders', designer: 'Antoine Bauza' };
let game2 = { name: 'Gloomhaven', designer: 'Isaac Childres' };

const weakGames = new WeakSet([game1, game2]);

/**
 * If a reference is suddenly deleted in the code, then it
 * will be garbage collected in the WeakSet.
 */
console.log(weakGames);
game2 = null;
console.log(weakGames);
