;(function(exports) {
  var tree = require('../tree');
  var Node = tree.Node;

  var tree1 = new Node(1,
                       new Node(2,
                                new Node(3),
                                new Node(4)),
                       new Node(5,
                                new Node(6),
                                new Node(7)));

  var tree2 = new Node(1,
                       new Node(2,
                                new Node(3)),
                       new Node(4));  

  describe('sumTree', function() {
    var sumTree = tree.sumTree;

    it('should return 0 for a null node', function() {
      var t = null;
      expect(sumTree(t)).toEqual(0);
    });

    it('should return the value for a node with a value', function() {
      var t = new Node(1);
      expect(sumTree(t)).toEqual(1);
    });

    it('should return the correct sum for a balanced tree', function() {
      expect(sumTree(tree1)).toEqual(28);
    });

    it('should return the correct sum for an unbalanced tree', function() {
      expect(sumTree(tree2)).toEqual(10);
    });
  });

  describe('printTree', function() {
    var printTree = tree.printTree;

    it('should print elements of the tree in a depth-first order', function() {
      spyOn(console, 'log');
      printTree(tree1);
      var expectedArgs = [[1], [2], [3], [4], [5], [6], [7]];
      expect(console.log.argsForCall).toEqual(expectedArgs);
    });

    it('should print elements of the tree in a depth-first order', function() {
      spyOn(console, 'log');
      printTree(tree2);
      var expectedArgs = [[1], [2], [3], [4]];
      expect(console.log.argsForCall).toEqual(expectedArgs);
    });
  });
})(this);