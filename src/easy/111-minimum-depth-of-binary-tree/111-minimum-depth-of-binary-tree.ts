// https://leetcode.com/problems/minimum-depth-of-binary-tree/

// DFS - Depth First Search

import { BinaryTreeNode } from '../../common/tree/binary-tree-node/binary-tree-node';

export const minDepth = (root?: BinaryTreeNode | null): number => {
  if (!root) return 0;
  if (root.left === null) return minDepth(root.right) + 1;
  if (root.right === null) return minDepth(root.left) + 1;

  return Math.min(minDepth(root.left), minDepth(root.right)) + 1;
};
