// https://leetcode.com/problems/binary-tree-inorder-traversal/solution/

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

/*
     5
  3     8
1  4  6   9  

*/

const traverse = (root, vals) => {
    if (!root) return;
    
    if (root.left) {
        traverse(root.left, vals);
    }
    
    vals.push(root.val);
    
    if (root.right) {
        traverse(root.right, vals);
    }
};

function inorderTraversal(root: TreeNode | null): number[] {
    const vals = [];
    
    traverse(root, vals);
    
    return vals;
};