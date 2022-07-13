// https://leetcode.com/problems/two-sum-iv-input-is-a-bst/

import { BinaryTreeNode } from '../../common/tree/binary-tree-node';

export const findTarget = (root: BinaryTreeNode | null, k: number): boolean => {
  const seen: Set<number> = new Set();
  const stack = [root];

  while (stack.length) {
    const node = stack.pop();

    if (seen.has(k - Number(node?.val))) return true;

    seen.add(Number(node?.val));

    if (node?.left) stack.push(node.left);
    if (node?.right) stack.push(node.right);
  }

  return false;
};
