/**
 * Maps can be used as a metadata dictionary. Data can be tracked about
 * an element, without actually tying the data to the element. The keys
 * and values can be anything at all, even DOM node elements.
 */
const clickCounts = new Map();
const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
  clickCounts.set(button, 0);
  button.addEventListener('click', function() {
    const count = clickCounts.get(this);
    clickCounts.set(this, count + 1);
  });
});
