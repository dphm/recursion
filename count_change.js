function countChange(amount, coins) {
  if (amount < 0 || coins.length === 0) return 0;
  if (amount === 0) return 1;
  return countChange(amount, tail(coins)) +
         countChange(amount - head(coins), coins);
}

function head(list) {
  return list[0];
}

function tail(list) {
  return list.slice(1);
}

exports = module.exports = countChange;
