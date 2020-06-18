import assert from 'assert';
import { inorderTraversal } from './inorder';
import { postOrder } from './postorder';
import { preTraversal } from './preorder';
import { TreeNode } from './treeNode';

const tree = new TreeNode(1, null, new TreeNode(2, new TreeNode(3)));

const traversed = inorderTraversal(tree);

assert.deepEqual(traversed, [1, 3, 2]);

const anotherTree = new TreeNode(
    15,
    new TreeNode(2, new TreeNode(1)),
    new TreeNode(32, new TreeNode(19), new TreeNode(42)),
);
/*
       15
    2     32
  1     19   42
*/

const anotherTraversed = inorderTraversal(anotherTree);
assert.deepEqual(anotherTraversed, [1, 2, 15, 19, 32, 42]);

const postTraversed = postOrder(anotherTree);
assert.deepEqual(postTraversed, [1, 2, 19, 42, 32, 15]);

const preTraversed = preTraversal(anotherTree);
assert.deepEqual(preTraversed, [15, 2, 1, 32, 19, 42]);
