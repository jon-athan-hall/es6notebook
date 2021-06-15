/**
 * WeakMap doesn't have a size, is not enumerable, and get garbage collected.
 */
let game = { title: '7 Wonders' };
let otherGame = { title: 'Wingspan' };

const strongMap = new Map();
const weakMap = new WeakMap();

/**
 * Here, the keys are Objects.
 */
strongMap.set(game, 'Antoine Bauza');
weakMap.set(otherGame, 'Elizabeth Hargrave');

console.log('StrongMap size is', strongMap.size);
console.log('WeakMap size is', weakMap.size);

/**
 * The WeakMap will actually be empty after the object
 * key is set to null. That's garbage collection in action.
 */
game = null;
otherGame = null;
