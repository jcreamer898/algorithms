export class TreeNode<T> {
  val: T;
  left: TreeNode<T> | null;
  right: TreeNode<T> | null;

  constructor(val: T, left = null, right = null) {
      this.val = val;
      this.left = left;
      this.right = right;
  }
}