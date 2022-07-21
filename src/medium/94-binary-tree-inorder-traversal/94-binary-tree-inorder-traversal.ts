// https://leetcode.com/problems/binary-tree-inorder-traversal/

import { BinaryTreeNode } from '../../common/tree/binary-tree-node/binary-tree-node';

export const inorderTraversal = (root: BinaryTreeNode | null): number[] => {
  const result: number[] = [];

  const traverse = (node: BinaryTreeNode | null) => {
    if (!node) return;
    if (node.left) traverse(node.left);
    result.push(Number(node.val));
    if (node.right) traverse(node.right);
  };

  traverse(root);

  return result;
};
