/**
 * Can be changed later, has function scope.
 * These variables will leak out of temporary places
 * such as if blocks.
 */
var game = 'Castles of Burgundy';

/**
 * Can be changed, has block scope.
 * Function blocks do count as blocks.
 */
let designer = 'Stefan Feld';

/**
 * This is a new, different designer variable inside
 * this if block.
 */
if (game !== '7 Wonders') {
  let designer = 'Antoine Bauza';
}

/**
 * Can not be updated, has block scope.
 * However, the attributes of Objects can be changed.
 */
const player = {
  name: 'Jonathan',
  username: 'facecheekwall'
};

player.username = 'jon-athan-hall';

/**
 * This method will keep Object attributes from changing.
 */
Object.freeze(player);

/**
 * Many schools of thought on the usage of var, let, const.
 * Use const by default, and then use let if you know the
 * variable will need to change.
 */
