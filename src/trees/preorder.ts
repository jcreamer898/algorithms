const traverse = (node, result) => {
    if (!node) {
        return;
    }

    result.push(node.val);
    traverse(node.left, result);
    traverse(node.right, result);
};

export const preTraversal = function (root) {
    const result = [];
    traverse(root, result);
    return result;
};
