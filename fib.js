function fib(n) {
  if (n < 0 || n === undefined) throw new Error('Invalid Fibonacci number');
  if (n === 0) return 0;
  if (n === 1) return 1;
  return fib(n - 1) + fib(n - 2);
}

module.exports = fib;
