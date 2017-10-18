const ratingMeanings = {
  9: 'Excellent game. Always want to play it.',
  8: 'Very good game. I like to play. Probably I\'ll suggest it and will never turn down a game.',
  7: 'Good game. Usually willing to play.'
};

/**
 * Template strings can be tagged with a function name, that
 * will run the string (and its values) through that function
 * to be altered however. The template string is broken up
 * by strings and values based on where the ${} each show up.
 */
function addMeanings(strings, ...values) {
  const meaning = values.map(value => {
    if (ratingMeanings[value]) {
      return `<abbr title="${ratingMeanings[value]}">${value}</abbr>`
    }
    return value;
  });

  /**
   * The reduce function builds one final value while looping
   * through an Array one at at time.
   */
  return strings.reduce((sentence, string, i) => {
    return `${sentence}${string}${meaning[i] || ''}`;
  }, '');
}

const myGame = '7 Wonders';
const otherGame = 'Castles of Burgundy';

/**
 * Here is the actual template string tagging in action. Notice that
 * plain old strings or numbers can be put inside the curlies too.
 */
const statement = addMeanings`Hello, I like ${myGame} and ${otherGame}, and have rated them ${8} and ${9} respectively.`;

document.body.innerHTML = statement;

/**
 * Tagging a template can be helpful for sanitizing user input with
 * an external library, to check for cross-site scripting attempts.
 */
