export class TreeNode<T = unknown> {
  constructor(public val = 0, public children: T[] = []) {
    this.val = val;
    this.children = children;
  }
}
