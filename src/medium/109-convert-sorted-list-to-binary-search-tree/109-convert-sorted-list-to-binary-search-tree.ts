// https://leetcode.com/problems/convert-sorted-list-to-binary-search-tree/

import { LinkedListNode } from '../../common/linked-list/linked-list-node/linked-list-node';
import { BinaryTreeNode } from '../../common/tree/binary-tree-node/binary-tree-node';

export const sortedListToBST = (head: LinkedListNode<number> | null): BinaryTreeNode<number> | null => {
  let curr = head;
  let count = 0;

  while (curr) {
    curr = curr.next;
    count++;
  }

  const traverse = (i: number, j: number): BinaryTreeNode<number> | null => {
    if (j < i) return null;

    const middle = (i + j) >> 1;
    const node = new BinaryTreeNode<number>();

    node.left = traverse(i, middle - 1);
    node.val = curr?.value;
    curr = curr?.next as LinkedListNode<number>;
    node.right = traverse(middle + 1, j);

    return node;
  };

  curr = head;

  return traverse(1, count);
};
