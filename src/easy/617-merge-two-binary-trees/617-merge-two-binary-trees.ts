// https://leetcode.com/problems/merge-two-binary-trees/

import { BinaryTreeNode } from '../../common/tree/binary-tree-node/binary-tree-node';

export const mergeTrees = (root1?: BinaryTreeNode | null, root2?: BinaryTreeNode | null): BinaryTreeNode | null => {
  if (!root1 && !root2) return null;
  if (!root1) return root2 as BinaryTreeNode;
  if (!root2) return root1;

  const newRoot = new BinaryTreeNode((root1.val as number) + (root2.val as number));
  newRoot.left = mergeTrees(root1.left, root2.left);
  newRoot.right = mergeTrees(root1.right, root2.right);

  return newRoot;
};
