const traverse = (node, result) => {
    if (!node) {
        return;
    }

    traverse(node.left, result);
    result.push(node.val);
    traverse(node.right, result);
};

export const inorderTraversal = function (root) {
    const result = [];
    traverse(root, result);
    return result;
};
