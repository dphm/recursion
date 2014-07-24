;(function(exports) {
  var ways = require('../step_climbing');

  describe('ways', function() {
    it('should return the correct number of ways when hops equals [1, 2, 3]', function() {
      var hops = [1, 2, 3];
      expect(ways(-1, hops)).toEqual(0);
      expect(ways(0, hops)).toEqual(1);
      expect(ways(1, hops)).toEqual(1);
      expect(ways(2, hops)).toEqual(2);
      expect(ways(3, hops)).toEqual(3);
      expect(ways(4, hops)).toEqual(4);
      expect(ways(5, hops)).toEqual(5);
      expect(ways(6, hops)).toEqual(7);
    });
  });
})(this);