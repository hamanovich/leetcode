// https://leetcode.com/problems/average-of-levels-in-binary-tree/

import { BinaryTreeNode } from '../../common/tree/binary-tree-node';

export const averageOfLevels = (root: BinaryTreeNode | null): number[] => {
  let queue = [root];
  const results: number[] = [];

  while (queue.length) {
    const row: BinaryTreeNode[] = [];
    let sum = 0;

    for (const node of queue) {
      sum += Number(node?.val);

      if (node?.left) row.push(node.left);
      if (node?.right) row.push(node.right);
    }

    results.push(sum / queue.length);
    queue = row;
  }

  return results;
};
