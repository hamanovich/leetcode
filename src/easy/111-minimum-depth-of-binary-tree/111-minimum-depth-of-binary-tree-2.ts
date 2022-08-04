// https://leetcode.com/problems/minimum-depth-of-binary-tree/

// BFS - Breadth-first search

import { BinaryTreeNode } from '../../common/tree/binary-tree-node/binary-tree-node';

export const minDepth = (root?: BinaryTreeNode | null): number => {
  if (!root) return 0;

  const queue = [root];
  let depth = 0;

  while (queue.length) {
    const len = queue.length;
    depth++;

    for (let i = 0; i < len; i++) {
      const node = queue.shift();

      if (!node?.left && !node?.right) return depth;
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }

  /* istanbul ignore next */
  return depth;
};
