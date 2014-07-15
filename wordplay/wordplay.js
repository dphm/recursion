var Scrabble = require('./scrabble');

var permutations = function(letters) {
  if (letters.length < 1) return [[]];
  return letters.reduce(function(result, letter, i, letters) {
    // Compute permutations for the rest
    var withoutLetter = permutations(rest(letters, i));

    // Append letter to each permutation without letter
    var withLetter = withoutLetter.map(function(permutation) {
      permutation.unshift(letter);
      return permutation;
    });

    // Add permutations for letter to result
    return result.concat(withLetter);
  }, []);
};

var rest = function(array, i) {
  return array.slice(0, i).concat(array.slice(i + 1));
}

module.exports = {
  permutations: permutations
};
