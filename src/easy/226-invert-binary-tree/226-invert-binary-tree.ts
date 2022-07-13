// https://leetcode.com/problems/invert-binary-tree/

import { BinaryTreeNode } from '../../common/tree/binary-tree-node';

export const invertTree = (root: BinaryTreeNode | null): BinaryTreeNode | null => {
  if (!root) return null;

  [root.left, root.right] = [invertTree(root.right), invertTree(root.left)];

  return root;
};
