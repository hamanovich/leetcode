// https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/

import { BinaryTreeNode } from '../../common/tree/binary-tree-node';

export const sortedArrayToBST = (nums: number[]): BinaryTreeNode | null => {
  const helper = (left: number, right: number): BinaryTreeNode | null => {
    if (left <= right) {
      const mid = Math.floor((left + right) / 2);
      const root = new BinaryTreeNode(nums[mid]);
      root.left = helper(left, mid - 1);
      root.right = helper(mid + 1, right);

      return root;
    }

    return null;
  };

  return helper(0, nums.length - 1);
};
