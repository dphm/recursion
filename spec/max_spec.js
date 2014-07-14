;(function(exports) {
  var max = require('../max');

  describe('max', function() {
    it('should return 0 for the empty list', function() {
      var l = [];
      expect(max(l)).toEqual(0);
    });

    it('should return the number for a list with one number', function() {
      var n = 1;
      var l = [n];
      expect(max(l)).toEqual(n);
    });

    it('should handle negative numbers', function() {
      var l = [-1, -2, -3];
      expect(max(l)).toEqual(-1);
    });

    it('should return the same number as Math.max', function() {
      var l = [];
      for (var i = 0; i < 10; i++) {
        l.push(Math.random() * 10);
      }
      expect(max(l)).toEqual(Math.max.apply(null, l));
    });
  });
})(this);
