// https://leetcode.com/problems/minimum-depth-of-binary-tree/

// BFS - Breadth-first search

import { BinaryTreeNode } from '../../common/tree/binary-tree-node/binary-tree-node';

export const minDepth = (root?: BinaryTreeNode | null): number => {
  if (!root) return 0;

  const queue = [root];
  let depth = 0;

  while (queue.length) {
    const node = queue.shift();
    depth++;

    if (!node?.left && !node?.right) break;
    if (node?.left) queue.push(node.left);
    if (node?.right) queue.push(node.right);
  }

  return depth;
};
