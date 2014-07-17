var VALUE = 0;
var CHILDREN = 1;

var Trie = function(value, children) {
  value = value || '';
  children = children || [];
  return [value, children];
};

function insert(trie, str) {
  var match = lowestMatch({ trie: trie, str: str });
  if (match.str.length > 0) {
    if (match.trie) match.trie[CHILDREN].push(toTrie(match.str));
  } else {
    if (match.trie) match.trie[CHILDREN].push([null]);
  }
  return trie;
}

function lookup(trie, str) {
  return lowestMatch({ trie: trie, str: str }).trie === null;
}

/**
 * Trie helper functions
 */

function matchesValue(trie, value) {
  return trie[VALUE] === value;
}

function matchesEnd(trie) {
  return trie[CHILDREN].some(function(child) { return child === null });
}

function matchFirstChar(tries, str) {
  var matches = tries.filter(function(trie) {
    return trie !== null && matchesValue(trie, head(str));
  });
  if (matches.length > 0) return matches[0];
  return false;
}

function lowestMatch(data) {
  var trie = data.trie;
  var str = data.str;

  if (str.length > 0) {
    var match = matchFirstChar(trie[CHILDREN], str);
    if (match) return lowestMatch({ trie: match, str: tail(str) });
    return { trie: trie, str: str };
  }
  if (matchesEnd(trie)) return { trie: null, str: str };
  return { trie: trie, str: str };
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

function toTrie(str) {
  if (str.length > 0) return new Trie(head(str), [toTrie(tail(str))]);
  return null;
}

module.exports = {
  Trie: Trie,
  insert: insert,
  lookup: lookup
};
