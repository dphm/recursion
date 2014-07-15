;(function(exports) {
  var Wordplay = require('../wordplay/wordplay');

  describe('permutations', function() {
    var permutations = Wordplay.permutations;

    it('should return the permutations for 0 elements', function() {
      var a = [];
      expect(permutations(a)).toEqual([[]]);
    });

    it('should return the permutations for 1 element', function() {
      var a = [0];
      expect(permutations(a)).toEqual([[0]]);
    });

    it('should return the permutations for 2 elements', function() {
      var a = [0, 1];
      var p = [[0, 1], [1, 0]];
      expect(permutations(a)).toEqual(p);
    });

    it('should return the permutations for 3 elements', function() {
      var a = [0, 1, 2];
      var p = [[0, 1, 2],
               [0, 2, 1],
               [1, 2, 0],
               [1, 0, 2],
               [2, 0, 1],
               [2, 1, 0]];
      expect(permutations(a).sort().join('')).toEqual(p.sort().join(''));
    });

    it('should return the permutations for 4 elements', function() {
      var a = [0, 1, 2, 3];
      var p = [[0, 1, 2, 3],
               [0, 1, 3, 2],
               [0, 2, 1, 3],
               [0, 2, 3, 1],
               [0, 3, 1, 2],
               [0, 3, 2, 1],
               [1, 0, 2, 3],
               [1, 0, 3, 2],
               [1, 2, 0, 3],
               [1, 2, 3, 0],
               [1, 3, 0, 2],
               [1, 3, 2, 0],
               [2, 0, 1, 3],
               [2, 0, 3, 1],
               [2, 1, 0, 3],
               [2, 1, 3, 0],
               [2, 3, 0, 1],
               [2, 3, 1, 0],
               [3, 0, 1, 2],
               [3, 0, 2, 1],
               [3, 1, 0, 2],
               [3, 1, 2, 0],
               [3, 2, 0, 1],
               [3, 2, 1, 0]];
      expect(permutations(a).sort().join('')).toEqual(p.sort().join(''));
    });
  });

})(this);
