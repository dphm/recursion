var Node = function(value, l, r) {
  this.value = value;
  this.left = l || null;
  this.right = r || null;
};

function sumTree(node) {
  if (node === null) return 0;
  return node.value + sumTree(node.left) + sumTree(node.right);
}

function printTree(node) {
  if (node === null) return;
  console.log(node.value);
  printTree(node.left);
  printTree(node.right);
}

module.exports = {
  Node: Node,
  sumTree: sumTree,
  printTree: printTree
}
