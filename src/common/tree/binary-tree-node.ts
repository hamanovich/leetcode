export class BinaryTreeNode {
  constructor(
    public val: number = 0,
    public left: BinaryTreeNode | null = null,
    public right: BinaryTreeNode | null = null
  ) {
    this.val = val;
    this.left = left;
    this.right = right;
  }

  get isLeaf() {
    return this.left === null && this.right === null;
  }

  get hasChildren() {
    return !this.isLeaf;
  }
}
