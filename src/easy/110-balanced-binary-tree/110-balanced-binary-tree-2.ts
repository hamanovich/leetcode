// https://leetcode.com/problems/balanced-binary-tree/

import { BinaryTreeNode } from '../../common/tree/binary-tree-node/binary-tree-node';

export const isBalanced = (root: BinaryTreeNode | null): boolean => {
  if (!root) return true;

  const height = (node: BinaryTreeNode | null): number =>
    !node ? 0 : 1 + Math.max(height(node.left), height(node.right));

  return Math.abs(height(root.left) - height(root.right)) < 2 && isBalanced(root.left) && isBalanced(root.right);
};
