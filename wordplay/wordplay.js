var Scrabble = require('./scrabble');

var Wordplay = {
  permutations: function(array) {
    if (array.length < 2) return [array];
    if (array.length === 2) return [array, swapped(array, 0, 1)];
    return array.reduce(function(result, e, i, a) {
      // Permute the rest
      var pRest = Wordplay.permutations(rest(a, i));

      // Append e to each permutation in pRest
      pElement = pRest.map(function(p) {
        p.unshift(e);
        return p;
      });

      // Add permutations for e to result
      return result.concat(pElement);
    }, []);
  }
};


var copy = function(array) {
  return array.slice(0);
}

var rest = function(array, i) {
  ensureIndexInBounds(array, i);
  return array.slice(0, i).concat(array.slice(i + 1));
}

var swapped = function(array, i, j) {
  ensureIndexInBounds(array, i);
  ensureIndexInBounds(array, j);

  var a = copy(array);
  var t = a[i];
  a[i] = a[j];
  a[j] = t;
  return a;
}

var ensureIndexInBounds = function(array, i) {
  if (i < 0 || i >= array.length) throw new Error('Index out of bounds');
}

module.exports = Wordplay;
