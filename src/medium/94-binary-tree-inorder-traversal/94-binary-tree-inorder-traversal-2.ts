// https://leetcode.com/problems/binary-tree-inorder-traversal/

import { BinaryTreeNode } from '../../common/tree/binary-tree-node';

export const inorderTraversal = (root: BinaryTreeNode | null): number[] => {
  const stack: BinaryTreeNode[] = [];
  const result: number[] = [];

  while (root || stack.length) {
    if (root) {
      stack.push(root);
      root = root.left;
    } else {
      root = stack.pop() as BinaryTreeNode;
      result.push(Number(root.val));
      root = root.right;
    }
  }

  return result;
};
