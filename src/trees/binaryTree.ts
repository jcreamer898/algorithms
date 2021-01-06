import { TreeNode } from './treeNode';

/*
        50
    30     40
  20  25  35  39


add(36)
*/

class BinaryTree<T> {
    root: TreeNode<T>;

    add(val) {
        const newNode = new TreeNode(val);
        if (!this.root) {
            this.root = newNode;
            return this;
        }

        let current = this.root;

        while (true) {
            if (val > current.right) {
                current = this.root.right;

                if (current.left == null) {
                    current.left = newNode;
                } else if (current.left) {
                }
            } else {
                current = this.root.left;
            }
        }
    }

    remove() {}
}
