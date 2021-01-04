
 class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
}
     
const traverse = (node, levels, level) => {
    levels[level] = levels[level] || [];
    
    if (!node) {
        return;
    }
    
    if (level % 2 === 0) {
        levels[level].push(node.val);
    } else {
        levels[level].unshift(node.val);
    }
    
    if (node.left) {
        traverse(node.left, levels, level + 1);
    }
    
    if (node.right) {
        traverse(node.right, levels, level + 1);
    }
};

function zigzagLevelOrder(root: TreeNode | null): number[][] {
    const levels = [];
    
    if (!root) return [];
    
    traverse(root, levels, 0);
    
    return levels;
};