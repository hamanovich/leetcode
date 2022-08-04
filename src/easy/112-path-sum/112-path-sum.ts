// https://leetcode.com/problems/path-sum/

import { BinaryTreeNode } from '../../common/tree/binary-tree-node/binary-tree-node';

export const hasPathSum = (root: BinaryTreeNode | null, targetSum: number): boolean => {
  if (!root) return false;
  if (!root.left && !root.right) return targetSum === root.val;
  return hasPathSum(root.left, targetSum - Number(root.val)) || hasPathSum(root.right, targetSum - Number(root.val));
};
