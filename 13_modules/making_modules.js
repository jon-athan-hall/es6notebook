/**
 * Modules are JS files with related functions inside, that are
 * made available to other apps and files.
 * Make a directory for modules and get them using npm (or bower or whatever).
 * The npm init command will set up a package.json file.
 */

/*
 * This variable is scoped to its block in its own JS module (file).
 * You can grab this in another module, but must export it first!
 */
const whateverKey = 'whatever key';
import whateverKey from './src/filename';

/**
 * Exporting as a default means the importing file can name it anything.
 * You can only do one default per module.
 */
export default whateverKey;

/**
 * Example of a named export, which requires import to use the same name.
 * You can even export functions!
 */
export const anotherKey = 'another key';
export whateverKey as thisKey;

/**
 * Import named exports like so:
 */
import { anotherKey } from './src/filename';
import { anotherKey as someKey } from './src/filename';

/**
 * For a combo of default and named exports:
 */
import theOne, { theOtherOne, thisOneToo } from './src/filename';
