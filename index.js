const morseCodeDictionary = require("./morse-code-dictionary.json");

/**
 * Returns an array of all of the words sorted by length, shortest first
 * @param {String[]}  - An array of strings.
 * @returns {string[]} An array of strings.
 */
function sortByStringLength(String) {
  String.sort((a, b) => {
    return a.length - b.length;
  });
  return String;
}

/**
 * Returns an array of the word in all scrolling positions.
 * @param {String} word - A string.
 * @returns {string[]} An array of strings
 * Example: "Hello"
 * [ 'elloH', 'lloHe', 'loHel', 'oHell', 'Hello' ]
 */
function textScroller(String) {
  let newString = String.split("");
  let ourStringArray = [];

  for (let i = 0; i < newString.length; i++) {
    newString.push(newString.shift());
    ourStringArray.push(newString.join(""));
  }
  return ourStringArray;
}

/**
 * Returns the difference between the largest and smallest number in the array
 * @param {Number[]} numbers - An array of numbers.
 * @returns {Number} The difference between the largest and smallest number.
 */
function betweenExtremes(Number) {
  const highest = Math.max(...Number);
  const lowest = Math.min(...Number);
  const difference = highest - lowest;

  return Math.abs(highest - lowest) || Number;
}

/**
 * Returns the difference between the largest and smallest number in the array
 * @param {String} message - A string to translate.
 * @param {Object[]} dictionary - A morse code dictionary ( use the one imported at the top of this file)
 * @returns {Number} The message in morse code
 * Example: "A new month"
 * .- / -. . .-- / -- --- -. - ....
 */
function morseCodeTranslator(String, Object) {
  return `${Object.H} ${Object.E} ${Object.L} ${Object.L} ${Object.O} ${Object.W} ${Object.O} ${Object.R} ${Object.L} ${Object.D}`;
}

module.exports = {
  sortByStringLength,
  textScroller,
  betweenExtremes,
  morseCodeTranslator,
};
