;(function(exports) {
  var lastIndexOf = require('../last_index_of');

  describe('lastIndexOf', function() {
    it('should return -1 if the element does not appear in the list', function() {
      var e = 5;
      var l = [1, 2, 4, 6, 2, 7];
      expect(lastIndexOf(e, l)).toEqual(-1);
    });

    it('should return the correct index if the element appears once', function() {
      var e = 5;
      var l = [1, 2, 4, 6, 5, 2, 7];
      expect(lastIndexOf(e, l)).toEqual(4);
    });

    it('should return the correct index if the element appears twice', function() {
      var e = 5;
      var l = [1, 2, 5, 4, 6, 5, 2, 7];
      expect(lastIndexOf(e, l)).toEqual(5);
    });
  });
})(this);