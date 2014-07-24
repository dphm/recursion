;(function(exports) {
  var ways = require('../taxi');

  describe('ways', function() {
    it('should return the correct number of ways for 10x10 blocks', function() {
      expect(ways(10, 10)).toEqual(184756);
    });
  });
})(this);
