// https://leetcode.com/problems/binary-tree-paths/

import { BinaryTreeNode } from '../../common/tree/binary-tree-node/binary-tree-node';

export const binaryTreePaths = (root: BinaryTreeNode | null): string[] => {
  const dfs = (root: BinaryTreeNode | null, path: string): string[] => {
    if (!root) return [];

    path += root.val;
    if (!root.left && !root.right) return [path];
    path += '->';

    return dfs(root.left, path).concat(dfs(root.right, path));
  };

  return dfs(root, '');
};
