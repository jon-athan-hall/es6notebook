/**
 * Simply using open and close curly brackets creates
 * block, in which let and const variables will be scoped.
 * This is a new replacement for the old IIFE, which protects
 * from messing with the window Object's own variables.
 */
{
  let game = "Agricola";
  const designer = "Uwe Rosenberg";
}

/**
 * A for loop is a block, so this using let will ensure
 * the expected number is displayed. If var was used, the
 * value of 10 would leak out and be used for all the logs.
 */
for (let i = 0; i < 8; i++) {
  setTimeout(function() {
    console.log(`Player count is... ${i}.`);
  }, 1000);
}
