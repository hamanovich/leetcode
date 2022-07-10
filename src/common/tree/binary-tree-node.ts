export class BinaryTreeNode<T = number> {
  val?: T;
  left: BinaryTreeNode | null;
  right: BinaryTreeNode | null;

  constructor(val?: T) {
    this.val = val;
    this.left = null;
    this.right = null;
  }

  get isLeaf(): boolean {
    return this.left === null && this.right === null;
  }

  get hasChildren(): boolean {
    return !this.isLeaf;
  }
}
