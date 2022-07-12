// https://leetcode.com/problems/range-sum-of-bst/

import { BinaryTreeNode } from '../../common/tree/binary-tree-node';

export const rangeSumBST = (root: BinaryTreeNode | null, low: number, high: number): number => {
  let sum = 0;

  if (!root) return sum;

  if (Number(root.val) <= high) sum += rangeSumBST(root.right, low, high);
  if (Number(root.val) <= high && Number(root.val) >= low) sum += Number(root.val);
  if (Number(root.val) > low) sum += rangeSumBST(root.left, low, high);

  return sum;
};
