import { BinaryTreeNode } from '../../common/tree/binary-tree-node';

export const lowestCommonAncestor = (
  root: BinaryTreeNode | null,
  p: BinaryTreeNode,
  q: BinaryTreeNode
): BinaryTreeNode | null => {
  while (root) {
    console.log(root.val < p.val, root.val < q.val);
    if (root.val < p.val && root.val < q.val) root = root.right;
    else if (root.val > p.val && root.val > q.val) root = root.left;
    else break;
  }

  return root;
};
