// https://leetcode.com/problems/diameter-of-binary-tree/

import { BinaryTreeNode } from '../../common/tree/binary-tree-node/binary-tree-node';

export const isSubtree = (root: BinaryTreeNode | null, subRoot: BinaryTreeNode | null): boolean => {
  if (!root) return !subRoot;

  const isEqual = (root1: BinaryTreeNode | null, root2: BinaryTreeNode | null): boolean => {
    if (!root1 || !root2) return !root1 && !root2;
    if (root1.val !== root2.val) return false;

    return isEqual(root1.left, root2.left) && isEqual(root1.right, root2.right);
  };

  return isEqual(root, subRoot) || isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
};
