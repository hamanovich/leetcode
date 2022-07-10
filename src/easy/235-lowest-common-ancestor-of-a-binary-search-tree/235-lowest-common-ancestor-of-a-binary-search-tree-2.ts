import { BinaryTreeNode } from '../../common/tree/binary-tree-node';

export const lowestCommonAncestor = (
  root: BinaryTreeNode | null,
  p: BinaryTreeNode,
  q: BinaryTreeNode
): BinaryTreeNode | null => {
  if (root && Number(root.val) < Number(p.val) && Number(root.val) < Number(q.val))
    return lowestCommonAncestor(root.right, p, q);
  if (root && Number(root.val) > Number(p.val) && Number(root.val) > Number(q.val))
    return lowestCommonAncestor(root.left, p, q);

  return root;
};
