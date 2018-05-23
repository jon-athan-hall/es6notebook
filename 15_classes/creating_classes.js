/**
 * The class keyword now exists with ES6, but it's really
 * still prototypal inheritance as usual. There are two 
 * syntax forms for working with classes.
 */

/**
 * This is the class declaration version. All methods that live
 * inside of a class are written like so.
 */
class Game {
  constructor(title, designer) {
    this.title = title;
    this.designer = designer;
  }

  displayHeading() {
    console.log(`${this.title} designed by ${this.designer}`);
  }

  /**
   * Static methods are part of the class itself, not any instance
   * of the class.
   */
  static why() {
    console.log('Board games are the best.');
  }

  /**
   * Setters and getters are available with keywords.
   * Can now use instanceName.score = 9;
   */
  set score(value) {
    this.score = value.trim();
  }

  /**
   * Can now use instanceName.score;
   */
  get score() {
    return this.score;
  }
}

const dub = new Game('7 Wonders', 'Antoine Bauza');

/**
 * This is the class expression version.
 */
const Designer = class {
}
