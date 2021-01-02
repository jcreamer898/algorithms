// https://leetcode.com/problems/binary-tree-level-order-traversal/solution/
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

const traverse = (root, levels, depth) => {
    if (!root) {
        return;
    }
    
    levels[depth] = levels[depth] || [];
    
    traverse(root.left, levels, depth + 1);
    levels[depth].push(root.val)
    traverse(root.right, levels, depth + 1);
};

function levelOrder(root: TreeNode | null): number[][] {
    const levels = [];
    traverse(root, levels, 0);
    return levels;
};