;(function(exports){
  var countChange = require('../count_change');

  describe('countChange', function() {
    it('should return the correct number of ways for 100 cents', function() {
      expect(countChange(100, [1, 5, 10, 25, 50])).toEqual(292);
    });
  });
})(this);