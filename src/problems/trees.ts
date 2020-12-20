import assert from 'assert';
import { TreeNode } from "../trees/treeNode";

export function isValidBST<T>(root: TreeNode<T>) {
    if (!root) {
      throw new Error('invalid tree');
    }

    return isValidBSTRecursive(root, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY);
}
  
function isValidBSTRecursive<T>(node: TreeNode<T>, min, max) {
    if (node) {
      if (node.val < min || node.val > max) {
          console.log(node.val, min, max)
        return false;
      }

      return isValidBSTRecursive(node.left, min, node.val) &&
        isValidBSTRecursive(node.right, node.val, max);
    }

    return true;
}

export function isBalanced(node) {
  if (!node) {
    return true;
  }

   let cache = {
      min: Number.MAX_SAFE_INTEGER,
      max: Number.MIN_SAFE_INTEGER
    };

  findDepth(cache, node, 0);
  console.log(cache.max, cache.min)
  return cache.max - cache.min <= 1;
}

function findDepth(cache, node, depth) {
  if (!node) {
    if (depth < cache.min) {
      cache.min = depth;
    }
    if (depth > cache.max) {
      cache.max = depth;
    }
  } else {
    findDepth(cache, node.left, depth + 1);
    findDepth(cache, node.right, depth + 1);
  }
}
/*
        8
    3     10
   1  6      14
     4  7  13  15
*/  

const root = new TreeNode(8);
root.left = new TreeNode(3, new TreeNode(1), new TreeNode(6, new TreeNode(4), new TreeNode(7)));
root.right = new TreeNode(10, new TreeNode(9), new TreeNode(14, new TreeNode(13), new TreeNode(15)));

assert.ok(isValidBST(root));
assert.ok(isBalanced(root))

