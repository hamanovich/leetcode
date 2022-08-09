// https://leetcode.com/problems/balanced-binary-tree/

import { BinaryTreeNode } from '../../common/tree/binary-tree-node/binary-tree-node';

export const isBalanced = (root: BinaryTreeNode | null): boolean => {
  const dfs = (node: BinaryTreeNode | null): number => {
    if (node) {
      const left = 1 + dfs(node.left);
      const right = 1 + dfs(node.right);

      return Math.abs(left - right) <= 1 ? Math.max(left, right) : Infinity;
    }

    return Number(node);
  };

  return dfs(root) !== Infinity;
};
