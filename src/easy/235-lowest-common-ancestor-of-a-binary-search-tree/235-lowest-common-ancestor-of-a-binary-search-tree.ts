import { BinaryTreeNode } from '../../common/tree/binary-tree-node';

export const lowestCommonAncestor = (
  root: BinaryTreeNode | null,
  p: BinaryTreeNode,
  q: BinaryTreeNode
): BinaryTreeNode | null => {
  while (root) {
    if (Number(root.val) < Number(p.val) && Number(root.val) < Number(q.val)) root = root.right;
    else if (Number(root.val) > Number(p.val) && Number(root.val) > Number(q.val)) root = root.left;
    else break;
  }

  return root;
};
