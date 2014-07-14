function lastIndexOf(x, l) {
  function lastIndex(x, l, current, last) {
    if (l[0] === undefined) return last;
    if (l[0] === x) return lastIndex(x, l.slice(1), current + 1, current);
    return lastIndex(x, l.slice(1), current + 1, last);
  }
  return lastIndex(x, l, 0, -1);
}

module.exports = lastIndexOf;
