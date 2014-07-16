function permutations(letters) {
  if (letters.length < 1) return [[]];
  return letters.reduce(function(result, letter, i, letters) {
    var withoutLetter = permutations(others(letters, i));
    var withLetter = copy(withoutLetter).map(function(permutation) {
      permutation.unshift(letter);
      return permutation;
    });
    return result.concat(withLetter);
  }, []);
}

function combinations(letters) {
  if (letters.length < 1) return [[]];
  var withoutLetter = combinations(tail(letters));
  var withLetter = copy(withoutLetter).map(function(combination) {
    combination.unshift(head(letters));
    return combination;
  });
  return [].concat(withLetter, withoutLetter);
}

function seriesOfLetters(letters) {
  return combinations(letters).reduce(function(result, combination) {
    return result.concat(permutations(combination));
  }, []);
}

/**
 * Array helper functions
 */

function head(array) {
  return array[0];
}

function tail(array, i) {
  return array.slice(1);
}

function others(array, i) {
  return array.slice(0, i).concat(array.slice(i + 1));
}

function copy(array) {
  return array.map(function(e) {
    if (e instanceof Array) return copy(e);
    return e;
  });
}

module.exports = {
  permutations: permutations,
  combinations: combinations,
  seriesOfLetters: seriesOfLetters
};
