var VALUE = 0;
var CHILDREN = 1;

var Trie = function(value, children) {
  value = value || '';
  children = children || [];
  return [value, children];
};

function insert(trie, str) {
  // String already in trie
  if (lookup(trie, str)) return trie;
  
  var t = copy(trie);
  if (str.length > 0) {
    t[CHILDREN].push(insert(new Trie(head(str)), tail(str)));
  } else {
    t[CHILDREN].push(null);
  }
  return t;
}

function lookup(tries, str) {
  // Ignore root trie
  if (tries[VALUE] === '') return lookup(tries[CHILDREN], str);

  if (str.length > 0) {
    function matchesPrefix(trie) { return trie !== null && trie[VALUE] === head(str); }
    function matchesRest(trie) { return lookup(trie[CHILDREN], tail(str)); }
    function matchesString(trie) { return matchesPrefix(trie) && matchesRest(trie); }
    return tries.some(matchesString);
  } else {
    function matchesEnd(trie) { return trie === null; }
    return tries.some(matchesEnd);
  }
}

/**
 * Trie helper functions
 */

function copy(trie) {
  if (!trie) return trie;
  var children = trie[CHILDREN].map(function(child) { return copy(child) });
  return new Trie(trie[VALUE], children);
}

/**
 * String helper functions
 */

function head(str) {
  return str[0];
}

function tail(str) {
  return str.slice(1);
}

module.exports = Trie;
