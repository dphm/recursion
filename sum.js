function sum(l) {
  if (l[0]) return l[0] + sum(l.slice(1));
  return 0;
}

module.exports = sum;
