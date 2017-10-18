/**
 * Do not use an arrow function, and the keyword this
 * will be the variable that the method was bound on.
 * Often times, this is the desired outcome!
 * Do not use an arrow function when adding to a prototype either.
 */
const game = document.querySelector('.game');
game.addEventListener('click', function(e) {
  let firstClass = 'game--opening';
  let secondClass = 'game--open';

  /**
   * Destructuring at work here. Look at that swap!
   * Doing this will treat the class toggles in a
   * stack kinda way.
   */
  if (this.classList.contains(firstClass)) {
    [firstClass, secondClass] = [secondClass, firstClass];
  }

  this.classList.toggle(firstClass);

  /**
   * With the setTimeout, using the arrow function won't rebind
   * this to Window, and it will remain as game. No need to use
   * the old that/self assignment trick.
   */
  setTimeout(() => {
    this.classList.toggle(secondClass);
  }, 200);
});
console.log(game);
