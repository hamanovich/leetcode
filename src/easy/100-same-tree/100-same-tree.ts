// https://leetcode.com/problems/same-tree/

import { BinaryTreeNode } from '../../common/tree/binary-tree-node/binary-tree-node';

export const isSameTree = (p?: BinaryTreeNode | null, q?: BinaryTreeNode | null): boolean => {
  if (!p && !q) return true;
  if (!p || !q) return false;

  return p.val === q.val && isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};
