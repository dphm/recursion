var fibs = [];

function fibMemo(n) {
  if (n < 0 || n === undefined) {
    throw new Error('Invalid Fibonacci number');
  } else if (n === 0) {
    fibs[n] = 0;
  } else if (n === 1) {
    fibs[n] = 1;
  } else {
    fibs[n] = fibMemo(n - 1) + fibMemo(n - 2);
  }
  return fibs[n];
}

module.exports = fibMemo;
