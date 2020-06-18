const traverse = (node, result) => {
  if (!node) {
      return;
  }

  traverse(node.left, result);
  traverse(node.right, result);
  result.push(node.val);
};

export const postOrder = function (root) {
  const result = [];
  traverse(root, result);
  return result;
};
