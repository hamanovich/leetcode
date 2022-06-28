import { BinaryTreeNode } from '../../common/tree/binary-tree-node';

export const lowestCommonAncestor = (
  root: BinaryTreeNode | null,
  p: BinaryTreeNode,
  q: BinaryTreeNode
): BinaryTreeNode | null => {
  if (root && root.val < p.val && root.val < q.val) return lowestCommonAncestor(root.right, p, q);
  if (root && root.val > p.val && root.val > q.val) return lowestCommonAncestor(root.left, p, q);

  return root;
};
