;(function(exports) {
  var sum = require('../sum');

  describe('sum', function() {
    it('should return 0 for the empty list', function() {
      var l = [];
      expect(sum(l)).toEqual(0);
    });

    it('should return the number for a list with one number', function() {
      var n = 1;
      var l = [n];
      expect(sum(l)).toEqual(n);
    });

    it('should handle negative numbers', function() {
      var l = [-1, -2, -3, -4, -5];
      expect(sum(l)).toEqual(-15);
    });

    it('should return the same sum as reduce', function() {
      var l = [];
      for (var i = 0; i < 10; i++) {
        l.push(Math.random() * 10);
      }
      var s = l.reduce(function(a, x) { return a + x }, 0);
      expect(sum(l)).toEqual(s);
    });
  });
})(this);
