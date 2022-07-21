// BFS - Breadth-first search

import { BinaryTreeNode } from '../../common/tree/binary-tree-node/binary-tree-node';

export const maxDepth = (root?: BinaryTreeNode): number => {
  if (!root) return 0;

  const queue = [root];
  let depth = 0;

  while (queue.length) {
    let size = queue.length;
    depth++;

    while (size--) {
      const item = queue.shift();

      if (item?.left) queue.push(item.left);
      if (item?.right) queue.push(item.right);
    }
  }

  return depth;
};
