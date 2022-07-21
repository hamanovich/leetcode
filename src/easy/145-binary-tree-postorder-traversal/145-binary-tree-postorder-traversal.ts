// https://leetcode.com/problems/binary-tree-postorder-traversal/

import { BinaryTreeNode } from '../../common/tree/binary-tree-node/binary-tree-node';

export const postorderTraversal = (root?: BinaryTreeNode | null): number[] => {
  if (!root) return [];

  const stack = [root];
  const result: number[] = [];

  while (stack.length) {
    const node = stack.pop();
    result.push(node?.val as number);

    if (node?.left) stack.push(node.left);
    if (node?.right) stack.push(node.right);
  }

  return result.reverse();
};
