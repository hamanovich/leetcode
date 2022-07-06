// DFS - Depth First Search
import { BinaryTreeNode } from './../../common/tree/binary-tree-node';

export const maxDepth = (root?: BinaryTreeNode): number => {
  if (!root) return 0;

  return Math.max(maxDepth(root.left as BinaryTreeNode), maxDepth(root.right as BinaryTreeNode)) + 1;
};
