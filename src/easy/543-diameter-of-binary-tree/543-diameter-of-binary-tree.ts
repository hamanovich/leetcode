// https://leetcode.com/problems/diameter-of-binary-tree/

import { BinaryTreeNode } from '../../common/tree/binary-tree-node/binary-tree-node';

export const diameterOfBinaryTree = (root: BinaryTreeNode | null): number => {
  let result = 0;

  const dfs = (root: BinaryTreeNode | null): number => {
    if (!root) return 0;

    const left = dfs(root.left);
    const right = dfs(root.right);

    result = Math.max(result, left + right);

    return Math.max(left, right) + 1;
  };

  dfs(root);

  return result;
};
