export class TreeNode<T = unknown> {
  val = 0;

  constructor(val = 0, public children: T[] = []) {
    this.val = val;
    this.children = children;
  }
}
