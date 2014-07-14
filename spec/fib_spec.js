;(function(exports) {
  var fib = require('../fib');

  describe('naive fib', function() {
    it('should throw an error for undefined n', function() {
      expect(function() { fib(); }).toThrow(new Error('Invalid Fibonacci number'));
    });

    it('should throw an error for negative n', function() {
      expect(function() { fib(-1); }).toThrow(new Error('Invalid Fibonacci number'));
    });

    it('should return the correct 0th Fibonacci number', function() {
      expect(fib(0)).toEqual(0);
    });

    it('should return the correct 1st Fibonacci number', function() {
      expect(fib(1)).toEqual(1);
    });

    it('should return the correct 20th Fibonacci number', function() {
      expect(fib(20)).toEqual(6765);
    });

    it('should return the correct 21st Fibonacci number', function() {
      expect(fib(21)).toEqual(10946);
    });
  });

  var fibMemo = require('../fib_memo');

  describe('memoized fib', function() {
    it('should throw an error for undefined n', function() {
      expect(function() { fibMemo(); }).toThrow(new Error('Invalid Fibonacci number'));
    });

    it('should throw an error for negative n', function() {
      expect(function() { fibMemo(-1); }).toThrow(new Error('Invalid Fibonacci number'));
    });

    it('should return the correct 0th Fibonacci number', function() {
      expect(fibMemo(0)).toEqual(0);
    });

    it('should return the correct 1st Fibonacci number', function() {
      expect(fibMemo(1)).toEqual(1);
    });

    it('should return the correct 20th Fibonacci number', function() {
      expect(fibMemo(20)).toEqual(6765);
    });

    it('should return the correct 21st Fibonacci number', function() {
      expect(fibMemo(21)).toEqual(10946);
    });
  });
})(this);
