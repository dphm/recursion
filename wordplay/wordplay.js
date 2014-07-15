var Scrabble = require('./scrabble');

var Wordplay = {
  permutations: function(letters) {
    if (letters.length < 1) return [[]];
    return letters.reduce(function(result, letter, i, letters) {
      // Permute the rest
      var pRest = Wordplay.permutations(rest(letters, i));

      // Append letter to each permutation in pRest
      pLetter = pRest.map(function(permutation) {
        permutation.unshift(letter);
        return permutation;
      });

      // Add permutations for letter to result
      return result.concat(pLetter);
    }, []);
  }
};

var rest = function(array, i) {
  return array.slice(0, i).concat(array.slice(i + 1));
}

module.exports = Wordplay;
