;(function(exports) {
  var wordplay = require('../wordplay/wordplay');

  describe('permutations', function() {
    var permutations = wordplay.permutations;

    it('should return the permutations for 0 elements', function() {
      var a = [];
      expect(permutations(a)).toEqual([[]]);
    });

    it('should return the permutations for 1 element', function() {
      var a = ['A'];
      expect(permutations(a)).toEqual([['A']]);
    });

    it('should return the permutations for 2 elements', function() {
      var a = ['A', 'B'];
      var p = [['A', 'B'], ['B', 'A']];
      expect(permutations(a)).toEqual(p);
    });

    it('should return the permutations for 3 elements', function() {
      var a = ['A', 'B', 'C'];
      var p = [['A', 'B', 'C'],
               ['A', 'C', 'B'],
               ['B', 'C', 'A'],
               ['B', 'A', 'C'],
               ['C', 'A', 'B'],
               ['C', 'B', 'A']];
      expect(permutations(a).sort().join('|')).toEqual(p.sort().join('|'));
    });

    it('should return the permutations for 4 elements', function() {
      var a = ['A', 'B', 'C', 'D'];
      var p = [['A', 'B', 'C', 'D'],
               ['A', 'B', 'D', 'C'],
               ['A', 'C', 'B', 'D'],
               ['A', 'C', 'D', 'B'],
               ['A', 'D', 'B', 'C'],
               ['A', 'D', 'C', 'B'],
               ['B', 'A', 'C', 'D'],
               ['B', 'A', 'D', 'C'],
               ['B', 'C', 'A', 'D'],
               ['B', 'C', 'D', 'A'],
               ['B', 'D', 'A', 'C'],
               ['B', 'D', 'C', 'A'],
               ['C', 'A', 'B', 'D'],
               ['C', 'A', 'D', 'B'],
               ['C', 'B', 'A', 'D'],
               ['C', 'B', 'D', 'A'],
               ['C', 'D', 'A', 'B'],
               ['C', 'D', 'B', 'A'],
               ['D', 'A', 'B', 'C'],
               ['D', 'A', 'C', 'B'],
               ['D', 'B', 'A', 'C'],
               ['D', 'B', 'C', 'A'],
               ['D', 'C', 'A', 'B'],
               ['D', 'C', 'B', 'A']];
      expect(permutations(a).sort().join('|')).toEqual(p.sort().join('|'));
    });
  });

  describe('combinations', function() {
    var combinations = wordplay.combinations;

    it('should return the combinations for 0 elements', function() {
      var a = [];
      expect(combinations(a)).toEqual([[]]);
    });

    it('should return the combinations for 1 element', function() {
      var a = ['A'];
      var c = [[],
               ['A']];
      expect(combinations(a).sort().join('|')).toEqual(c.sort().join('|'));
    });

    it('should return the combinations for 2 elements', function() {
      var a = ['A', 'B'];
      var c = [[], ['A'], ['B'], ['A', 'B']];
      expect(combinations(a).sort().join('|')).toEqual(c.sort().join('|'));
    });

    it('should return the combinations for 3 elements', function() {
      var a = ['A', 'B', 'C'];
      var c = [[], ['A'], ['B'], ['C'], ['B', 'C'], ['A', 'C'], ['A', 'B'], ['A', 'B', 'C']];
      expect(combinations(a).sort().join('|')).toEqual(c.sort().join('|'));
    });
  });

  describe('seriesOfLetters', function() {
    var seriesOfLetters = wordplay.seriesOfLetters;

    it('should return the permutations of combinations for 0 elements', function() {
      var a = [];
      var s = [[]];
      expect(seriesOfLetters(a)).toEqual(s);
    });

    it('should return the permutations of combinations for 1 element', function() {
      var a = ['A'];
      var s = [[], ['A']];
      expect(seriesOfLetters(a).sort().join('|')).toEqual(s.sort().join('|'));
    });

    it('should return the permutations of combinations for 2 elements', function() {
      var a = ['A', 'B'];
      var s = [[], ['A'], ['B'], ['A', 'B'], ['B', 'A']];
      expect(seriesOfLetters(a).sort().join('|')).toEqual(s.sort().join('|'));
    });

    it('should return the permutations of combinations for 3 elements', function() {
      var a = ['A', 'B', 'C'];
      var s = [[], ['A'], ['B'], ['C'],
               ['A', 'B'],
               ['B', 'A'],
               ['B', 'C'],
               ['C', 'B'],
               ['A', 'C'],
               ['C', 'A'],
               ['A', 'B', 'C'],
               ['A', 'C', 'B'],
               ['B', 'C', 'A'],
               ['B', 'A', 'C'],
               ['C', 'A', 'B'],
               ['C', 'B', 'A']];
      expect(seriesOfLetters(a).sort().join('|')).toEqual(s.sort().join('|'));
    });
  });
})(this);
